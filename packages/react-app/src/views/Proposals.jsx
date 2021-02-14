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
          description: "testsfsfdf sdf sdfk msd; kma testsfsfdf sdf sdfk msd; kma msd; kma testsfsfdf sdf sdfk msd; kma testsfsfdf sdf testsfsfdf sdf sdfk msd; kma testsfsfdf sdf sdfk msd; kma msd; kma testsfsfdf sdf sdfk msd; kma testsfsfdf sdf...",
          image: "https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg"
        },
        {
          id: "4fb6971e-f5c2-4a86-bd3e-30877b347988",
          title: "Cantor Exhibition - Children",
          author: "Jane Donovan",
          approval: 80,
          requiredFunds: 3000,
          description: "testsfsfdf sdf sdfk msd; kma testsfsfdf sdf sdfk msd; kma msd; kma testsfsfdf sdf sdfk msd; kma testsfsfdf sdf testsfsfdf sdf sdfk msd; kma testsfsfdf sdf sdfk msd; kma msd; kma testsfsfdf sdf sdfk msd; kma testsfsfdf sdf...",
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
                  <p>{p.description}</p>
                </Card>
              </div>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
