/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Spin, Card/*, Skeleton*/ } from "antd";
import "./Proposals.css";
import sal from "sal.js";
import "sal.js/dist/sal.css";

export default function Proposals({ useContractReader, readContracts }) {
  const proposal0 = useContractReader(readContracts, "BlockFundDAO", "proposals", "0");
  const proposal1 = useContractReader(readContracts, "BlockFundDAO", "proposals", "1");
  const [proposals, setProposals] = useState([]);
  const cardStyle = {
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
    width: "100%",
    height: "15rem",
    margin: "1rem",
    borderRadius: "6px",
    overflow: "hidden"
  };
  const getApproval = proposal => {
    const num = parseInt(proposal?.yesVote);
    const denom = parseInt(proposal?.yesVote) + parseInt(proposal?.noVote);
    if (num === 0 && denom === 0) {
      return 50;
    } else if (num > 0 && denom === 0) {
      return 100;
    } else {
      return 100 * num / denom;
    }
  };

  useEffect(() => {
    console.log("WOOOPO", proposal0);
    setProposals([proposal0, proposal1]);
    sal();
  }, [proposal0, proposal1]);

  return (
    <div style={{ padding: "2rem 6rem" }} className="proposals">
      {!proposals.length ? (
        <Spin size="large" style={{ margin: "16rem 0" }} />
      ) : (
        <div style={{ textAlign: "left" }}>
          {proposals.map((p, i) =>
            <Link to={`/proposal/${i}`}>
              <div data-sal="slide-up" data-sal-delay={i*100} data-sal-duration="800">
                <Card style={cardStyle}>
                  <div style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    height: "4px",
                    borderRadius: "4px 0 0 0",
                    backgroundColor: "#ed4637",
                    width: "100%"
                  }} />
                  <div data-sal="slide-right" data-sal-delay={i*100} data-sal-duration="1200" style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    height: "4px",
                    borderRadius: "4px 0 0 0",
                    backgroundColor: "#51cf5d",
                    width: `${getApproval(p)}%`,
                    opacity: 1
                  }} />
                  <div
                    style={{
                      backgroundImage: `url(${p.coverImg})`,
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
                  <h1>{p.title} — {parseInt(p.requestedFund) / 1e18} DAI <span style={{ opacity: 0.25 }}>(~${parseInt(p.requestedFund) / 1e18})</span></h1>
                  <h6 style={{ opacity: "0.5", transform: "translateY(-1rem)" }}>by Jeffrey Smith ({p.sponsor?.substr(0,6)})</h6>
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
