/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { Button, Card, Input, Divider } from "antd";
import "./Welcome.css";
import sal from "sal.js";
import "sal.js/dist/sal.css";


export default function Members() {

    const buttonStyle = {
        background: "rgb(47, 67, 245)",
        border: "none",
        width: "33%",
        fontSize: "16px",
        borderRadius: "6px",
        color: "#fff",
        padding: "1rem",
        cursor: "pointer"
      }


    const cardStyle = {
        boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
        width: "80%",
        margin: "1rem",
        borderRadius: "6px",
        overflow: "hidden",
        padding: "1rem 6rem",
        display: "inline-block"
      };

    const [members, setMembers] = useState([]);
    const [member, setMember] = useState({});

    useEffect(() => {
        setMembers([
        {
            id: "0xD4A4D1302dea23c259b637f72D80697f9f64530B",
            name: "Magdeline",
            age: "26",
        },
        {
            id: "0xea23c259b637f72D80697D4A4D1302df9f64530B",
            name: "Simon",
            age: "28",
        },
        {
            id: "0x72D80697D4A4D1302dfea23c259b637f9f64530B",
            name: "James",
            age: "22",
        },
        {
            id: "0x1302df9f64530ea23c259b637f72D80697D4A4DB",
            name: "Jane",
            age: "23",
        },
        {
            id: "0xb637f72D80697D4A4D1302df9f6453ea23c2590B",
            name: "Rami",
            age: "28",
        },
        {
            id: "0x9b637f72Dea23c2580697D4A4D1302df9f64530B",
            name: "Salma",
            age: "29",
        }
        ]);
    }, []);

  return (
    <div style={{ padding: "2rem 6rem", textAlign: "center" }}>
        <Card 
        style={cardStyle}>
        <h4 style={{color: "#2F51C9",
        marginBottom: "20px"}}>Nominate Members</h4>
        <h4 style={{fontWeight: "400",
        marginBottom: "30px"}}>Only nominate members who you have met in person and 
        can confirm to reside in Palo Alto area.</h4>

        <div style={{margin:8}}>
          <Input onChange={()=>{console.log("input member")}} 
                 style={{marginBottom: "30px"}}/>
          <button style={buttonStyle}
            onClick={()=>{
            console.log("add new member")
            /* look how you call setPurpose on your contract: */
          }}>Nominate</button>
        </div>

        </Card>

        <Card 

        style={cardStyle}>
        <h4 style={{color: "#2F51C9",
        marginBottom: "20px"}}>Active Members</h4>
        <h4 style={{fontWeight: "400",
        marginBottom: "50px"}}>List of active members in Palo Alto Fund</h4>
        { 
        Object.keys(members).map((member, i) => (
            <div>
                <li key={i}>
                <span className="input-label">{ members[member].id }</span>
                </li>
                <Divider/>
            </div>

        ))
        }  
        </Card>

    </div>
  );
}
