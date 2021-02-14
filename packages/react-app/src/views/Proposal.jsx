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
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
    width: "80%",
    margin: "1rem",
    borderRadius: "6px",
    overflow: "hidden",
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
        description: `The purpose of this plan is to promote and recognize the value of our campus trees. According to trees.stanford.edu, there has been loss of diversity from the original tree and shrub plantings of the 1880s and 1890s, which is well-documented for conifers. Over the past quarter century there has also been a loss of eucalypt species, from over 125 species present in the early 1970s to fifty-one today. The school is already doing a superb restoration of the Arizona Garden, but we want to expand that for a broader restoration of the remaining areas of campus.`,
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
      <Link to="/proposals" style={{ paddingLeft: "7.9rem" }}>&lt; Back to List</Link>
      {!proposal ? (
        <p>Proposal not found.</p>
      ) : (
        <div style={{ textAlign: "center" }}>
          <div
            data-sal="fade"
            data-sal-duration="800"
          >
            <Card
              style={cardStyle}
              cover={
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    backgroundImage: `url(${proposal.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                />
              }
            >
              <div style={{ textAlign: "left", padding: "1rem 6rem 4rem" }}>
                <h1 style={{ fontSize: "3rem" }}>{proposal.title}</h1>
                <h3
                  data-sal="fade"
                  data-sal-duration="800"
                >
                  Community Sponsor
                </h3>
                <h1
                  data-sal="fade"
                  data-sal-duration="800"
                >{proposal.author} (0x1234)</h1>
                <br />
                <h3
                  data-sal="fade"
                  data-sal-duration="800"
                >Requested Fund</h3>
                <h1
                  data-sal="fade"
                  data-sal-duration="800"
                >{proposal.requiredFunds} DAI</h1>
                <br />
                <h3
                  data-sal="fade"
                  data-sal-duration="800"
                >Purpose</h3>
                <p
                  data-sal="fade"
                  data-sal-duration="800"
                >{proposal.description}</p>
                <br />
                <h3
                  data-sal="fade"
                  data-sal-duration="800"
                >Questions and Answers</h3>
                <Input ref={inputRef} placeholder="Your question here" onKeyUp={inputCapture} />
                {loading ? (
                  <div style={{ marginTop: "1rem", textAlign: "center" }}><Spin /></div>
                ) : (
                  answer && (
                    <p style={{ marginTop: "1rem", opacity: 0.5 }}>
                      {answer}
                    </p>
                  )
                )}
                <hr style={{ opacity: 0.25, margin: "3rem 0" }} />
                <h1
                  data-sal="fade"
                  data-sal-duration="800"
                >
                  Current Vote
                </h1>
                <p
                  data-sal="fade"
                  data-sal-duration="800"
                >Your vote in this proposal will hold <b>2.5x</b> as much power.</p>
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
                    backgroundColor: "#ed4637",
                    width: "100%"
                  }} />
                  <div data-sal="slide-right" data-sal-delay={100} data-sal-duration="1200" style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    height: "8px",
                    borderRadius: "8px 0 0 8px",
                    backgroundColor: "#51cf5d",
                    width: `${proposal.approval}%`,
                    opacity: 1
                  }} />
                </div>
                <button
                  data-sal="fade"
                  data-sal-duration="800"
                  style={{
                    backgroundColor: "#51cf5d",
                    width: "49%",
                    fontSize: "16px",
                    border: "none",
                    borderRadius: "6px",
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
                    background: "#ed4637",
                    border: "none",
                    width: "49%",
                    fontSize: "16px",
                    borderRadius: "6px",
                    color: "#fff",
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
