import React, { useEffect } from "react";
import { Card } from "antd";
import sal from "sal.js";
import "sal.js/dist/sal.css";
import "./Explore.css";
import demoMap from "./map_demographics.png";
import greeneryMap from "./map_greenery.png";

export default function Explore() {
  const cardStyle = {
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
    width: "45%",
    margin: "1rem",
    borderRadius: "6px",
    overflow: "hidden",
    display: "inline-block",
    padding: "0",
    cursor: "pointer"
  };

  useEffect(() => {
    sal();
  }, []);

  return (
    <div style={{ padding: "2rem 6rem" }} className="explore">
      <h1
        data-sal="fade"
        data-sal-duration="800"
      >Explore Maps</h1>
      <h3
        data-sal="fade"
        data-sal-delay="50"
        data-sal-duration="600"
      >Our story maps provide intuition on emerging situations.</h3>
      <button
        data-sal="fade"
        data-sal-delay="100"
        data-sal-duration="800"
        style={{
          backgroundColor: "#2F43F5",
          width: "30%",
          fontSize: "16px",
          border: "none",
          borderRadius: "6px",
          color: "#fff",
          padding: "1rem",
          cursor: "pointer",
          margin: "1rem"
        }}
      >
        Submit Proposal
      </button>
      <br />
      <div>
        <Card
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-duration="800"
          style={cardStyle}
          cover={<img src={greeneryMap} />}
        >
          <h1>Greenery Map</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </Card>
        <Card
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="800"
          style={cardStyle}
          cover={<img src={demoMap} />}
        >
          <h1>Demographics Map</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </Card>
        <div style={{height: "40rem"}} />
      </div>
    </div>
  );
}