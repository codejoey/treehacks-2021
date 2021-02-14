/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { Button, Card, Input, Divider } from "antd";
import "./Welcome.css";
import sal from "sal.js";
import "sal.js/dist/sal.css";


export default function Members() {

    const buttonStyle = {
        backgroundColor: "#2F43F5",
        width: "fit-content",
        height: "fit-content",
        fontSize: "16px",
        border: "none",
        borderRadius: "50px",
        color: "#fff",
        padding: "0.5rem 1.5rem",
        cursor: "pointer"
      }

    useEffect(() => { sal({ threshold: 0.2 }) }, []);


    const cardStyle = {
        boxShadow: "4px 4px 4px rgba(0,0,0,0.05)",
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
            id: "0xea23c259b637f72D80697D4A4D1302df9f64530B",
            name: "Magdeline",
            age: "26",
        },
        {
            id: "0xea23c259b637f72D80697D4A4D1302df9f64530B",
            name: "Simon",
            age: "28",
        },
        {
            id: "0xea23c259b637f72D80697D4A4D1302df9f64530B",
            name: "Simon",
            age: "28",
        },
        {
            id: "0xea23c259b637f72D80697D4A4D1302df9f64530B",
            name: "Simon",
            age: "28",
        },
        {
            id: "0xea23c259b637f72D80697D4A4D1302df9f64530B",
            name: "Simon",
            age: "28",
        },
        {
            id: "0xea23c259b637f72D80697D4A4D1302df9f64530B",
            name: "Simon",
            age: "28",
        }
        ]);
    }, []);

  return (
    <div style={{ padding: "2rem 6rem", textAlign: "center" }}>
        <Card 
        style={cardStyle}
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="800">
        <h4 style={{color: "#2F51C9",
        marginBottom: "20px"}}>Nominate Members</h4>
        <h4 style={{fontWeight: "400",
        marginBottom: "30px"}}>Only nominate members who you have met in person and 
        can confirm to reside in Palo Alto area.</h4>

        <div style={{margin:8}}>
          <Input onChange={()=>{console.log("input member")}} 
                 style={{marginBottom: "30px"}}/>
          <Button style={buttonStyle}
            onClick={()=>{
            console.log("add new member")
            /* look how you call setPurpose on your contract: */
          }}>Nominate</Button>
        </div>

        </Card>

        <Card 
        style={cardStyle}
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="900">
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
