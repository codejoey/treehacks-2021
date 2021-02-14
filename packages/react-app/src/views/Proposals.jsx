/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Spin, Card/*, Skeleton*/ } from "antd";
import "./Proposals.css";
import sal from "sal.js";
import "sal.js/dist/sal.css";

export default function Proposals() {
  const [loading, setLoading] = useState(true);
  const [proposals, setProposals] = useState([]);
  const cardStyle = {
    boxShadow: "4px 4px 4px rgba(0,0,0,0.05)",
    width: "100%",
    height: "15rem",
    margin: "1rem",
    borderRadius: "6px",
    overflow: "hidden"
  };

  useEffect(() => {
    setTimeout(() => {
      setProposals([
        {
          id: "28ae900a-f9f5-4e5f-aceb-062254a80972",
          title: "Plant Trees on Stanford Campus",
          author: "Jeff Smith",
          approval: 60,
          requiredFunds: 1000,
          description: `The purpose of the Plan is to achieve a mix of land uses, develop a form based design code, improve
          transportation and pedestrian circulation, transportation options, and to enhance the streetscape and
          appearance of the corridor through urban design techniques.
          
          For purpose of the RFP, the consultant is to provide a detailed work plan describing the process and the
          methodology to be employed in deriving the information requested. The City anticipates refinement of
          the final scope of services based on additional information contained in the responses to this RFP or
          information from the presentations made to the Corridor Staff Team by the finalists.
          
          The City of Rockville occupies 13.44 square miles within the Metropolitan Washington, DC area and is
          located 12 miles northwest of Washington. Rockville had a population estimate of approximately 57,100
          according to the 2004 Census estimates.
          
          The City of Rockville operates under the council/manager form of municipal government and derives its
          authority from a charter granted by the State of Maryland. As mandated by state law, Montgomery
          County provides school and health services in Rockville. The City has an employment base of
          approximately 80,059 jobs (2005 estimate, MWCOG Round 7 Forecast projection). The City has
          undergone tremendous redevelopment and infill development in recent years, including an ongoing
          redevelopment of the Town Center.`,
          image: "https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg"
        },
        {
          id: "4fb6971e-f5c2-4a86-bd3e-30877b347988",
          title: "Cantor Exhibition - Children",
          author: "Jane Donovan",
          approval: 80,
          requiredFunds: 3000,
          description: `The purpose of the Plan is to achieve a mix of land uses, develop a form based design code, improve
          transportation and pedestrian circulation, transportation options, and to enhance the streetscape and
          appearance of the corridor through urban design techniques.
          
          For purpose of the RFP, the consultant is to provide a detailed work plan describing the process and the
          methodology to be employed in deriving the information requested. The City anticipates refinement of
          the final scope of services based on additional information contained in the responses to this RFP or
          information from the presentations made to the Corridor Staff Team by the finalists.
          
          The City of Rockville occupies 13.44 square miles within the Metropolitan Washington, DC area and is
          located 12 miles northwest of Washington. Rockville had a population estimate of approximately 57,100
          according to the 2004 Census estimates.
          
          The City of Rockville operates under the council/manager form of municipal government and derives its
          authority from a charter granted by the State of Maryland. As mandated by state law, Montgomery
          County provides school and health services in Rockville. The City has an employment base of
          approximately 80,059 jobs (2005 estimate, MWCOG Round 7 Forecast projection). The City has
          undergone tremendous redevelopment and infill development in recent years, including an ongoing
          redevelopment of the Town Center.`,
          image: "https://thecentraltrend.com/wp-content/uploads/2017/02/stars-900x563.jpg"
        }
      ]);
      setLoading(false);
      sal();
    }, 1000);
  }, []);

  return (
    <div style={{ padding: "2rem 6rem" }} className="proposals">
      {loading ? (
        <div>
          {/*([1,1,1,1]).map(_ =>
            <Card style={cardStyle}>
              <Skeleton active />
            </Card>
          )*/}
          <Spin size="large" style={{ margin: "16rem 0" }} />
        </div>
      ) : (
        <div style={{ textAlign: "left" }}>
          {proposals.map((p, i) =>
            <Link to={`/proposal/${p.id}`}>
              <div data-sal="slide-up" data-sal-delay={i*100} data-sal-duration="800">
                <Card style={cardStyle}>
                  <div style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    height: "4px",
                    borderRadius: "4px",
                    backgroundColor: "#E8E6E6",
                    width: "100%"
                  }} />
                  <div data-sal="slide-right" data-sal-delay={i*100} data-sal-duration="1200" style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    height: "4px",
                    borderRadius: "4px",
                    backgroundColor: "#2F43F5",
                    width: `${p.approval}%`
                  }} />
                  <div
                    style={{
                      backgroundImage: `url(${p.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "20%",
                      height: "12rem",
                      borderRadius: "6px",
                      boxShadow: "4px 4px 4px rgba(0,0,0,0.05)",
                      float: "left",
                      marginRight: "24px"
                    }}
                  />
                  <h1>{p.title} — {p.requiredFunds} DAI</h1>
                  <h6 style={{ opacity: "0.5", transform: "translateY(-1rem)" }}>by {p.author}</h6>
                  <p>{p.description.split(' ').slice(0,120).join(' ')}...</p>
                </Card>
              </div>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
