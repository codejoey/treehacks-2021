import React from "react";
import { PageHeader } from "antd";

// displays a page header

export default function Header({ networkDisplay }) {
  console.log(networkDisplay);
  return (
    <a href="/" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="🧊 BlockFund"
        subTitle={`nominate members, find proposal, and allocate funds hosted on ${networkDisplay} chain`}
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
