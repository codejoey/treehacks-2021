/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useEffect } from "react";
import commentBox from "commentbox.io";

export default function Proposal({ match }) {
  const { id } = match.params;
  let removeCommentBox = null;

  useEffect(() => {
    removeCommentBox = commentBox("5640591161425920-proj");
    return () => removeCommentBox();
  }, []);

  return (
    <div style={{ padding: "2rem 6rem", filter: "hue-rotate(100deg) saturate(2)" }}>
      {id}
      <div className="commentbox"></div>
    </div>
  );
}
