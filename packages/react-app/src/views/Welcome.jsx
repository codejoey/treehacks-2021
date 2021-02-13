/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useEffect } from "react";
import { Button } from "antd";
export default function Welcome() {


  return (
    <div style={{ background: "#F5F9FF" }}>
        <div style={{textAlign: "left",
                     marginLeft: "12vw",
                     paddingTop: "70px",
                     paddingBottom: "100px",
                     maxWidth: "40vw",
                     display: "inline-block"}}>
            <h1 style={{color: "#2F51C9",
                        marginBottom: "0px",
                        fontSize: "65px",
                        fontWeight: "800"}}>Palo Alto Fund</h1>
            <h4 style={{color: "#2F51C9",
                        marginBottom: "30px"}}>powered by BlockFund</h4>
            <h4 style={{fontWeight: "400",
                        marginBottom: "30px"}}>A fully decentralized community governance platform powered by blockchain technology.</h4>

            <Button 
                onClick={()=>{
                console.log("join community fund")}}
                style={{background: "#2F51C9", 
                        color: "#ffffff",
                        padding: "5" }}
                >JOIN COMMINUTY FUND </Button>

        </div>
        <div style={{float: "right",
                     marginRight: "8vw",
                     paddingTop: "30px",
                     paddingBottom: "100px",
                     maxWidth: "40vw",
                     display:"inline-block"}}>
            <img src={require('../PAFlogo.png')}
                 style={{maxWidth : "400px",
                         maxHeight: "400px"}}/>
        </div>
    </div>
  );
}
