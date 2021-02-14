/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Spin, Card /*, Skeleton*/ } from "antd";
import "./Proposals.css";
import sal from "sal.js";
import "sal.js/dist/sal.css";

export default function Proposals({ useContractReader, readContracts }) {
  const proposal0 = useContractReader(readContracts, "BlockFundDAO", "proposals", "0");
  const proposal1 = useContractReader(readContracts, "BlockFundDAO", "proposals", "1");
  const [loading, setLoading] = useState(true);
  const [proposalA, setProposalA] = useState({});
  const [proposalB, setProposalB] = useState({});
  const cardStyle = {
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
    width: "100%",
    height: "15rem",
    margin: "1rem",
    borderRadius: "6px",
    overflow: "hidden",
  };

  useEffect(() => {
    setTimeout(() => {
      setProposalA(proposal0);
      setProposalB(proposal1);
      setLoading(false);
      sal();
    }, 1000);
  }, []);

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

  return (
    <div style={{ padding: "2rem 6rem" }} className="proposals">
      {loading ? (
        <div>
          <Spin size="large" style={{ margin: "16rem 0" }} />
        </div>
      ) : (
        <div style={{ textAlign: "left" }}>
          <Link to="/proposal/0">
            <div data-sal="slide-up" data-sal-delay={0 * 100} data-sal-duration="800">
              <Card style={cardStyle}>
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    height: "4px",
                    borderRadius: "4px 0 0 0",
                    backgroundColor: "#ed4637",
                    width: "100%",
                  }}
                />
                <div
                  data-sal="slide-right"
                  data-sal-delay={0 * 100}
                  data-sal-duration="1200"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    height: "4px",
                    borderRadius: "4px 0 0 0",
                    backgroundColor: "#51cf5d",
                    width: `${getApproval(proposal0)}%`,
                    opacity: 1,
                  }}
                />
                <div
                  style={{
                    backgroundImage: `url(${proposal0.coverImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "20%",
                    height: "12rem",
                    borderRadius: "6px",
                    boxShadow: "4px 4px 4px rgba(0,0,0,0.05)",
                    float: "left",
                    marginRight: "24px",
                  }}
                />
                <h1>
                  {proposal0.title} — {parseInt(proposal0.requestedFund) / 1e18} DAI{" "}
                  <span style={{ opacity: 0.25 }}>(~${parseInt(proposal0.requestedFund) / 1e18})</span>
                </h1>
                <h6 style={{ opacity: "0.5", transform: "translateY(-1rem)" }}>
                  by Scott Moses Sunarto ({proposal0.sponsor?.substr(0, 8)}...)
                </h6>
                <p>{proposal0.description.split(" ").slice(0, 120).join(" ")}...</p>
              </Card>
            </div>
          </Link>

          <Link to="/proposal/1">
            <div data-sal="slide-up" data-sal-delay={0 * 100} data-sal-duration="800">
              <Card style={cardStyle}>
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    height: "4px",
                    borderRadius: "4px 0 0 0",
                    backgroundColor: "#ed4637",
                    width: "100%",
                  }}
                />
                <div
                  data-sal="slide-right"
                  data-sal-delay={0 * 100}
                  data-sal-duration="1200"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    height: "4px",
                    borderRadius: "4px 0 0 0",
                    backgroundColor: "#51cf5d",
                    width: `${getApproval(proposal1)}%`,
                    opacity: 1,
                  }}
                />
                <div
                  style={{
                    backgroundImage: `url(${proposal1.coverImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "20%",
                    height: "12rem",
                    borderRadius: "6px",
                    boxShadow: "4px 4px 4px rgba(0,0,0,0.05)",
                    float: "left",
                    marginRight: "24px",
                  }}
                />
                <h1>
                  {proposal0.title} — {parseInt(proposal1.requestedFund) / 1e18} DAI{" "}
                  <span style={{ opacity: 0.25 }}>(~${parseInt(proposal0.requestedFund) / 1e18})</span>
                </h1>
                <h6 style={{ opacity: "0.5", transform: "translateY(-1rem)" }}>
                  by Scott Moses Sunarto ({proposal1.sponsor?.substr(0, 8)}...)
                </h6>
                <p>{proposal1.description.split(" ").slice(0, 120).join(" ")}...</p>
              </Card>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
