/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Card, Input, Spin } from "antd";
import commentBox from "commentbox.io";
import axios from "axios";

export default function Proposal({ match, useContractReader, readContracts, writeContracts, tx }) {
  const proposal0 = useContractReader(readContracts, "BlockFundDAO", "proposals", "0");
  const proposal1 = useContractReader(readContracts, "BlockFundDAO", "proposals", "1");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");
  const [proposal, setProposal] = useState({});
  const inputRef = useRef(null);
  const { id } = match.params;
  const cardStyle = {
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
    width: "80%",
    margin: "1rem",
    borderRadius: "6px",
    overflow: "hidden",
    display: "inline-block",
  };
  const inputCapture = e => {
    const ques = inputRef.current.state.value;
    if (e.key === "Enter") {
      (async () => {
        setLoading(true);
        try {
          const ans = await axios.post(
            "https://api.openai.com/v1/engines/davinci/completions",
            {
              prompt: `The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly. The assistant is an excellent reader, who is ready to answer questions about the following passage:\n\"\"\"\n${proposal.description}\n\"\"\"\n\nHuman: ${ques}\nAI:`,
              max_tokens: 25,
              temperature: 0.9,
              max_tokens: 50,
              top_p: 1,
              frequency_penalty: 0,
              presence_penalty: 0.6,
              stop: ["Human:"],
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer sk-dEqxyRl2VyQ4bh2yfJxiOVJguOKMJEghoH1qEsrd",
              },
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
  const getApproval = proposal => {
    const num = parseInt(proposal.yesVote);
    const denom = parseInt(proposal.yesVote) + parseInt(proposal.noVote);
    if (num === 0 && denom === 0) {
      return 50;
    } else if (num > 0 && denom === 0) {
      return 100;
    } else {
      return (100 * num) / denom;
    }
  };

  useEffect(() => {
    setProposal(!~~id ? proposal0 : proposal1);
    const removeCommentBox = commentBox("5640591161425920-proj");
    return () => removeCommentBox();
  }, [proposal0, proposal1]);

  return (
    <div style={{ padding: "2rem 6rem", textAlign: "left" }}>
      <Link to="/proposals" style={{ paddingLeft: "7.9rem" }}>
        &lt; Back to List
      </Link>
      {!proposal ? (
        <div style={{ height: 10000 }}></div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <div>
            <Card
              style={cardStyle}
              cover={
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    backgroundImage: `url(${proposal.coverImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              }
            >
              <div style={{ textAlign: "left", padding: "1rem 6rem 4rem" }}>
                <h1 style={{ fontSize: "3rem" }}>{proposal.title}</h1>
                <h3>Community Sponsor</h3>
                <h1>Scott Moses Sunarto ({proposal.sponsor?.substr(0, 8)}...)</h1>
                <br />
                <h3>Requested Fund</h3>
                <h1>
                  {parseInt(proposal.requestedFund) / 1e18} DAI{" "}
                  <span style={{ opacity: 0.25 }}>(~${parseInt(proposal.requestedFund) / 1e18})</span>
                </h1>
                <br />
                <h3>Purpose</h3>
                <p>{proposal.description}</p>
                <br />
                <h3>Questions and Answers</h3>
                <Input ref={inputRef} placeholder="Your question here" onKeyUp={inputCapture} />
                {loading ? (
                  <div style={{ marginTop: "1rem", textAlign: "center" }}>
                    <Spin />
                  </div>
                ) : (
                  answer && <p style={{ marginTop: "1rem", opacity: 0.5 }}>{answer}</p>
                )}
                <hr style={{ opacity: 0.25, margin: "3rem 0" }} />
                <h1>Current Vote</h1>
                <p>
                  Your vote in this proposal will hold <b>2.5x</b> as much power.
                </p>
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    height: "8px",
                    borderRadius: "8px",
                    marginBottom: "2rem",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      height: "8px",
                      borderRadius: "8px",
                      backgroundColor: "#ed4637",
                      width: "100%",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      height: "8px",
                      borderRadius: "8px 0 0 8px",
                      backgroundColor: "#51cf5d",
                      width: `${getApproval(proposal)}%`,
                      opacity: 1,
                    }}
                  />
                </div>
                <button
                  style={{
                    backgroundColor: "#51cf5d",
                    width: "49%",
                    fontSize: "16px",
                    border: "none",
                    borderRadius: "6px",
                    color: "#fff",
                    padding: "1rem",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    tx(writeContracts.BlockFundDAO.voteProposal(id, "1"));
                  }}
                >
                  Yay
                </button>
                <button
                  style={{
                    background: "#ed4637",
                    border: "none",
                    width: "49%",
                    fontSize: "16px",
                    borderRadius: "6px",
                    color: "#fff",
                    padding: "1rem",
                    cursor: "pointer",
                    marginLeft: "1%",
                  }}
                  onClick={() => {
                    tx(writeContracts.BlockFundDAO.voteProposal(id, "0"));
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
