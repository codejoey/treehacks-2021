import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import sal from "sal.js";
import "sal.js/dist/sal.css";
import "./Explore.css";
import demoMap from "./demographics.png";
import greeneryMap from "./greenery.png";

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
        <Link to="/community-greenery">
          <Card
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-duration="800"
            style={cardStyle}
            cover={<div style={{ backgroundImage: `url(${greeneryMap})`, backgroundSize: "cover", backgroundPosition: "center", width: "100%", height: "400px"}} />}
          >
            <h1>Greenery Map</h1>
          </Card>
        </Link>
        <Link to="/community-diversity">
          <Card
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-duration="800"
            style={cardStyle}
            cover={<div style={{ backgroundImage: `url(${demoMap})`, backgroundSize: "cover", backgroundPosition: "center", width: "100%", height: "400px"}} />}
          >
            <h1>Demographics Map</h1>
          </Card>
        </Link>
        <div style={{height: "10rem"}} />
      </div>
    </div>
  );
}