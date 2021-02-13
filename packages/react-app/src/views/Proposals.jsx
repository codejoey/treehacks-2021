/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Skeleton } from "antd";
import sal from "sal.js";
import "sal.js/dist/sal.css";
import "./Proposals.css";

export default function Proposals() {
  const [loading, setLoading] = useState(true);
  const [proposals, setProposals] = useState([]);
  const { Meta } = Card;
  const cardStyle = {
    boxShadow: "4px 4px 4px rgba(0,0,0,0.05)",
    width: "100%",
    height: "15rem",
    margin: "1rem",
    borderRadius: "6px"
  };

  useEffect(sal, []);

  useEffect(() => {
    setTimeout(() => {
      setProposals([
        {
          id: "28ae900a-f9f5-4e5f-aceb-062254a80972",
          title: "Plant Trees on Stanford Campus",
          author: "Jeff Smith",
          requiredFunds: 1000,
          description: "testsfsfdf sdf sdfk msd; kma testsfsfdf sdf sdfk msd; kma msd; kma testsfsfdf sdf sdfk msd; kma testsfsfdf sdf testsfsfdf sdf sdfk msd; kma testsfsfdf sdf sdfk msd; kma msd; kma testsfsfdf sdf sdfk msd; kma testsfsfdf sdf...",
          image: "https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg"
        },
        {
          id: "4fb6971e-f5c2-4a86-bd3e-30877b347988",
          title: "Cantor Exhibition - Children",
          author: "Jane Donovan",
          requiredFunds: 3000,
          description: "testsfsfdf sdf sdfk msd; kma testsfsfdf sdf sdfk msd; kma msd; kma testsfsfdf sdf sdfk msd; kma testsfsfdf sdf testsfsfdf sdf sdfk msd; kma testsfsfdf sdf sdfk msd; kma msd; kma testsfsfdf sdf sdfk msd; kma testsfsfdf sdf...",
          image: "https://thecentraltrend.com/wp-content/uploads/2017/02/stars-900x563.jpg"
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div style={{ padding: "2rem 6rem", textAlign: "left" }}>
      {loading ? (
        <div>
          {([1,1,1,1]).map(_ =>
            <Card style={cardStyle}>
              <Skeleton active />
            </Card>
          )}
        </div>
      ) : (
        <div>
          {proposals.map(p =>
            <Link to={`/proposal/${p.id}`}>
              <Card style={cardStyle}>
                <div
                  style={{
                    backgroundImage: `url(${p.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "20%",
                    height: "12rem",
                    borderRadius: "6px",
                    boxShadow: "4px 4px 4px rgba(0,0,0,0.05)",
                    float: "left",
                    marginRight: "24px"
                  }}
                />
                <h1>{p.title}</h1>
                <h6 style={{ opacity: "0.5", transform: "translateY(-1rem)" }}>by {p.author}</h6>
                <p>{p.description}</p>
              </Card>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

/*
save for proposal individual page

import commentBox from "commentbox.io";

export default function Proposals() {
  let removeCommentBox = null;

  useEffect(() => {
    removeCommentBox = commentBox("5640591161425920-proj");
    return () => removeCommentBox();
  }, []);

  return (
    <div style={{ filter: "hue-rotate(100deg) saturate(2)" }}>
      <div className="commentbox"></div>
    </div>
  );
}

*/