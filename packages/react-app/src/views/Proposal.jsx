/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Card, Input, Spin } from "antd";
import sal from "sal.js";
import "sal.js/dist/sal.css";
import commentBox from "commentbox.io";
import axios from "axios";

export default function Proposal({ match }) {
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");
  const [proposals, setProposals] = useState([]);
  const [proposal, setProposal] = useState({});
  const { id } = match.params;
  const cardStyle = {
    boxShadow: "4px 4px 4px rgba(0,0,0,0.05)",
    width: "80%",
    margin: "1rem",
    borderRadius: "6px",
    overflow: "hidden",
    padding: "1rem 6rem",
    display: "inline-block"
  };
  const inputRef = useRef(null);
  const inputCapture = e => {
    const ques = inputRef.current.state.value;
    if (e.key === "Enter") {
      (async () => {
        setLoading(true);
        try {
          const ans = await axios.post(
            "https://api.openai.com/v1/engines/davinci/completions",
            {
              "prompt": `The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly. The assistant is an excellent reader, who is ready to answer questions about the following passage:\n\"\"\"\n${proposal.description}\n\"\"\"\n\nHuman: ${ques}\nAI:`,
              "max_tokens": 25,
              "temperature": 0.9,
              "max_tokens": 50,
              "top_p": 1,
              "frequency_penalty": 0,
              "presence_penalty": 0.6,
              "stop": ["Human:"]
            },
            {
              headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer sk-dEqxyRl2VyQ4bh2yfJxiOVJguOKMJEghoH1qEsrd"
              }
            },
          );
          setAnswer(ans.data.choices[0].text);
        } catch (err) {
          setAnswer("An error occurred—please try again later.");
        }
        setLoading(false);
      })();
    }
  };

  useEffect(() => {
    const removeCommentBox = commentBox("5640591161425920-proj");
    
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

    sal({ threshold: 0.2 });

    return () => removeCommentBox();
  }, []);

  useEffect(() => {
    if (id && proposals.length) {
      setProposal(proposals.filter(p => p.id === id)[0]);
    }
  }, [id, proposals])

  return (
    <div style={{ padding: "2rem 6rem", textAlign: "left" }}>
      <Link to="/proposals">&lt; Back to List</Link>
      {!proposal ? (
        <p>Proposal not found.</p>
      ) : (
        <div style={{ textAlign: "center" }}>
          <div
            data-sal="fade"
            data-sal-duration="800"
          >
            <Card style={cardStyle}>
              <h1>{proposal.title}</h1>
              <img
                src={proposal.image}
                style={{
                  boxShadow: "4px 4px 4px rgba(0,0,0,0.05)",
                  width: 600,
                  borderRadius: "6px",
                  overflow: "hidden",
                  marginBottom: "3rem"
                }}
              />
              <div style={{ textAlign: "left" }}>
                <h3
                  style={{ opacity: 0.5 }}
                  data-sal="slide-up"
                  data-sal-duration="800"
                >
                  Community Sponsor
                </h3>
                <h2
                  data-sal="fade"
                  data-sal-duration="800"
                >{proposal.author} (0x1234)</h2>
                <br />
                <h3
                  data-sal="fade"
                  data-sal-duration="800"
                  style={{ opacity: 0.5 }}
                >Requested Fund</h3>
                <h2
                  data-sal="fade"
                  data-sal-duration="800"
                >{proposal.requiredFunds} DAI</h2>
                <br />
                <h3
                  data-sal="fade"
                  data-sal-duration="800"
                  style={{ opacity: 0.5 }}
                >Purpose</h3>
                <p
                  data-sal="fade"
                  data-sal-duration="800"
                >{proposal.description}</p>
                <br />
                <h3
                  data-sal="fade"
                  data-sal-duration="800"
                  style={{ opacity: 0.5 }}
                >Questions and Answers</h3>
                <Input ref={inputRef} placeholder="Your question here" onKeyUp={inputCapture} />
                {loading ? (
                  <div style={{ marginTop: "1rem", textAlign: "center" }}><Spin /></div>
                ) : (
                  answer && (
                    <p
                      style={{ marginTop: "1rem" }}
                    >
                      {answer}
                    </p>
                  )
                )}
                <hr style={{ opacity: 0.25, margin: "3rem 0" }} />
                <h1
                  data-sal="fade"
                  data-sal-duration="800"
                >Vote Progress</h1>
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    height: "8px",
                    borderRadius: "8px",
                    marginBottom: "2rem"
                  }}
                >
                  <div style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    height: "8px",
                    borderRadius: "8px",
                    backgroundColor: "#E8E6E6",
                    width: "100%"
                  }} />
                  <div data-sal="slide-right" data-sal-delay={100} data-sal-duration="1200" style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    height: "8px",
                    borderRadius: "8px",
                    backgroundColor: "#2F43F5",
                    width: `${proposal.approval}%`
                  }} />
                </div>
                <button
                  data-sal="fade"
                  data-sal-duration="800"
                  style={{
                    backgroundColor: "#2F43F5",
                    width: "49%",
                    fontSize: "16px",
                    border: "none",
                    borderRadius: "50px",
                    color: "#fff",
                    padding: "1rem",
                    cursor: "pointer"
                  }}
                >
                  Yay
                </button>
                <button
                  data-sal="fade"
                  data-sal-duration="800"
                  style={{
                    background: "none",
                    border: "solid 2px #2F43F5",
                    width: "49%",
                    fontSize: "16px",
                    borderRadius: "50px",
                    color: "#2F43F5",
                    padding: "1rem",
                    cursor: "pointer",
                    marginLeft: "1%"
                  }}
                >
                  Nay
                </button>
              </div>
            </Card>
          </div>
          <div style={{ marginTop: "4rem", padding: "0 7rem", filter: "hue-rotate(100deg) saturate(2)" }}>
            <div className="commentbox"></div>
          </div>
        </div>
      )}
    </div>
  );
}
