/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useEffect } from "react";
import commentBox from "commentbox.io";

export default function Proposals() {
  let removeCommentBox = null;

  useEffect(() => {
    removeCommentBox = commentBox("5640591161425920-proj");
    return () => removeCommentBox();
  }, []);

  return (
    <div>
      <div className="commentbox"></div>
    </div>
  );
}
