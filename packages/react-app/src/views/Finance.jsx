/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState, useEffect } from "react";
import { Card } from "antd";
import sal from "sal.js";
import "sal.js/dist/sal.css";

export default function Finance() {
  const [loading, setLoading] = useState(true);
  const cardHalfStyle = {
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
    width: "42%",
    display: "inline-block",
    margin: "0.5rem"
  };
  const cardWholeStyle = {
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
    width: "85%",
    display: "inline-block",
    margin: "0.5rem"
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 400);
    sal({ threshold: 0 });
  }, []);

  return (
    <div style={{ padding: "2rem 6rem" }}>
      <h1
        data-sal="slide-up"
        data-sal-duration="800"
      >
        Financial Overview
      </h1>
      <div>
        <Card
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="800"
          style={cardHalfStyle}
        >
          <h2>Your Community Dues</h2>
          <h1 style={{ fontSize: "72px" }}>$25</h1>
          <h3 style={{ opacity: 0.5 }}>Last payment: January 2021</h3>
          <button
            style={{
              backgroundColor: "#2F43F5",
              width: "100%",
              fontSize: "16px",
              border: "none",
              borderRadius: "6px",
              color: "#fff",
              padding: "1rem",
              cursor: "pointer",
              marginTop: "1rem"
            }}
          >
            Pay Dues
          </button>
        </Card>
        <Card
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-duration="800"
          style={cardHalfStyle}
        >
          <h2>Your Community Fund</h2>
          <h1 style={{ fontSize: "72px" }}>$2500</h1>
          <h3 style={{ opacity: 0.5 }}>10% increase this month</h3>
          <button
            style={{
              backgroundColor: "#2F43F5",
              width: "100%",
              fontSize: "16px",
              border: "none",
              borderRadius: "6px",
              color: "#fff",
              padding: "1rem",
              cursor: "pointer",
              marginTop: "1rem"
            }}
          >
            Submit Proposal
          </button>
        </Card>
        <Card
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="800"
          style={cardWholeStyle}
        >
          <h1>The Community Ledger</h1>
          {/* table */}
          <div style={{ width: "100%", margin: "1.5rem 0" }}>
            {/* row */}
            <div style={{ width: "100%", padding: "0.75rem 0" }}>
              {/* col */}
              <div style={{ width: "20%", display: "inline-block" }}><h4>Date</h4></div>
              <div style={{ width: "60%", display: "inline-block" }}><h4>Name</h4></div>
              <div style={{ width: "20%", display: "inline-block" }}><h4>Amount</h4></div>
            </div>
            <div
              data-sal="slide-up"
              data-sal-delay="400"
              data-sal-duration="800"
              style={{ width: "100%", padding: "0.75rem 0" }}
            >
              <div style={{ width: "20%", display: "inline-block" }}><h4>13/20/2020</h4></div>
              <div style={{ width: "60%", display: "inline-block" }}><h4>Scott Moses Sunarto Membership Payment</h4></div>
              <div style={{ width: "20%", display: "inline-block" }}><h4 style={{ color: "green" }}>+$100</h4></div>
            </div>
            <div
              data-sal="slide-up"
              data-sal-delay="500"
              data-sal-duration="800"
              style={{ width: "100%", padding: "0.75rem 0" }}
            >
              <div style={{ width: "20%", display: "inline-block" }}><h4>13/20/2020</h4></div>
              <div style={{ width: "60%", display: "inline-block" }}><h4>Palo Alto Fund Protocol Fee</h4></div>
              <div style={{ width: "20%", display: "inline-block" }}><h4 style={{ color: "red" }}>-$2,500</h4></div>
            </div>
            <div
              data-sal="slide-up"
              data-sal-delay="600"
              data-sal-duration="800"
              style={{ width: "100%", padding: "0.75rem 0" }}
            >
              <div style={{ width: "20%", display: "inline-block" }}><h4>13/20/2020</h4></div>
              <div style={{ width: "60%", display: "inline-block" }}><h4>Scott Moses Sunarto Membership Payment</h4></div>
              <div style={{ width: "20%", display: "inline-block" }}><h4 style={{ color: "green" }}>+$100</h4></div>
            </div>
            <div
              data-sal="slide-up"
              data-sal-delay="700"
              data-sal-duration="800"
              style={{ width: "100%", padding: "0.75rem 0" }}
            >
              <div style={{ width: "20%", display: "inline-block" }}><h4>13/20/2020</h4></div>
              <div style={{ width: "60%", display: "inline-block" }}><h4>Palo Alto Fund Protocol Fee</h4></div>
              <div style={{ width: "20%", display: "inline-block" }}><h4 style={{ color: "red" }}>-$2,500</h4></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
