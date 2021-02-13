/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useEffect } from "react";
import { Card } from "antd";
import sal from "sal.js";
import "sal.js/dist/sal.css";

export default function Process() {
  const cardStyle = {
    boxShadow: "4px 4px 4px rgba(0,0,0,0.05)",
    width: "23%",
    display: "inline-block",
    margin: "0.5rem"
  };

  useEffect(sal, [])

  return (
    <div style={{ padding: "2rem 6rem" }}>
      <h1
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="800"
      >How the Fund Works</h1>
      <h3
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="900"
        style={{ marginBottom: "2rem" }}
      >in <span style={{ color: "#4190f7" }}>four</span> simple steps:</h3>
      <Card
        data-sal="slide-up"
        data-sal-delay="400"
        data-sal-duration="900"
        title="Step 1: Submit Proposal"
        style={cardStyle}
      >
        <p>test</p>
      </Card>
      <Card
        data-sal="slide-up"
        data-sal-delay="500"
        data-sal-duration="900"
        title="Step 2: Vote for Proposal"
        style={cardStyle}
      >
        <p>test</p>
      </Card>
      <Card
        data-sal="slide-up"
        data-sal-delay="600"
        data-sal-duration="900"
        title="Step 3: Payment Request"
        style={cardStyle}
      >
        <p>test</p>
      </Card>
      <Card
        data-sal="slide-up"
        data-sal-delay="700"
        data-sal-duration="900"
        title="Step 4: Vote for Payment"
        style={cardStyle}
      >
        <p>test</p>
      </Card>
    </div>
  );
}
