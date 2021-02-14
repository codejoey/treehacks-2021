import React from "react";
import logo from "../PAFlogo.png";

// displays a page header

export default function Footer() {
  return (
    <div style={{
      background: "#F5F9FF",
      height: "fit-content",
      width: "100vw",
      position: "relative",
      borderTop: "1px solid rgba(0,0,0,0.06)"
    }}>
      <div style={{
        width: "100%",
        display: "inline-block",
        position: "relative"
      }}>
        <img
          src={logo}
          style={{
            maxWidth: "100px",
            maxHeight: "100px",
            marginTop: "30px",
            marginBottom: "30px"
          }}
        />
      </div>
      <h6 style={{ opacity: 0.5, paddingBottom: "0.5rem" }}>© Palo Alto Fund 2021 - All Rights Reserved</h6>
    </div>
  );
}
