/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import sal from "sal.js";
import "sal.js/dist/sal.css";
import commentBox from "commentbox.io";

export default function Proposal({ match }) {
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

  useEffect(() => {
    const removeCommentBox = commentBox("5640591161425920-proj");
    
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

    sal();

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
                >Relevant Documents</h3>
                <p
                  data-sal="fade"
                  data-sal-duration="800"
                >TODO</p>
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
