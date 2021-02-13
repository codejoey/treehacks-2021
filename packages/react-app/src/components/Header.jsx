import React from "react";
import { PageHeader } from "antd";

// displays a page header

export default function Header() {
  return (
    <a href="/" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="🧊 BlockFund"
        subTitle="nominate members, find proposals, and allocate funds"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
