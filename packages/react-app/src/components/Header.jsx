import React from "react";
import { PageHeader } from "antd";
import logo from "./blockfund.png";

// displays a page header

export default function Header({ networkDisplay }) {
  console.log(networkDisplay);
  return (
    <a href="/" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title={<img src={logo} height="40" />}
        subTitle={`nominate members, find proposal, and allocate funds hosted on ${networkDisplay} chain`}
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
