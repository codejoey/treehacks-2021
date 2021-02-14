/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useEffect } from "react";
import { Button } from "antd";
import "./Welcome.css";
export default function Welcome() {


  return (
      <div>
    <div style={{ background: "#F5F9FF" }}>
        <div style={{width: "fit-content",
                     margin: "30px auto"}}>
        <div style={{textAlign: "left",
                     //marginLeft: "12vw",
                     paddingBottom: "100px",
                     width: "40vw",
                     display: "inline-block",
                     paddingTop: "140px",
                     verticalAlign: "top",}}>
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
                className={"hoverzoom"}
                >JOIN COMMINUTY FUND </Button>

        </div>
        <div style={{
                     marginLeft: "50px",
                     paddingTop: "50px",
                     verticalAlign: "top",
                     maxWidth: "40vw",
                     display:"inline-block"}}>
            <img src={require('../PAFlogo.png')}
                 style={{maxWidth : "400px",
                         maxHeight: "400px",
                         float: "left"}}/>
        </div>
        </div>

    </div>
    <div style={{textAlign: "center",
                 margin: "60px 20vw"}}>
    <h2>Democratized community funds powered by blockchain technology.</h2>
    <h4>A community fund, funded by the community, and spent by the community.</h4>
    <h4>BlockFund is a decentralised autonomous organisation which enables communities & neighbourhoods in funding community projects that actually matter to residents.</h4>
    <h4>We  democratise community funds. Allowing residents to vote for their project they actually want and also in a transparent process.</h4>
    </div >
    
    <div className={"hoverzoom"} style={{textAlign: "left",
                     paddingTop: "30px",
                     display: "block",
                     width: "fit-content",
                     margin: "50px auto"}}>
        <div style={{textAlign: "left",
                     paddingTop: "30px",
                     width: "20vw",
                     marginRight: "100px",
                     display: "inline-block"}}>
                    <h2>COMMUNITY PROPOSALS</h2>
                    <h4>View a list of all the active proposals in the community and vote to support it! Click on a proposal to view details, relevant documents, and leave comments.</h4>
                    <Button 
                onClick={()=>{
                console.log("join community fund")}}
                style={{background: "#2F51C9", 
                        color: "#ffffff",
                        padding: "5" }}
                className={"hoverzoom"}
                >VIEW PROPOSALS </Button>
        </div>
        <div style={{textAlign: "left",
                     maxWidth: "40vw",
                     display: "inline-block",
                     verticalAlign: "top"
                    }}>
                <img src={require('../proposals.png')}
                 style={{maxWidth : "400px",
                         maxHeight: "200px"}}/>
        </div>
    </div>

    <div className={"hoverzoom"} style={{textAlign: "left",
                     paddingTop: "30px",
                     display: "block",
                     width: "fit-content",
                     margin: "50px auto"}}>

        <div style={{textAlign: "left",
                     maxWidth: "40vw",
                     display: "inline-block",
                     verticalAlign: "top"
                    }}>
                <img src={require('../finances.png')}
                 style={{maxWidth : "290px",
                         maxHeight: "200px",
                         float: "right"}}/>
        </div>
        <div style={{textAlign: "left",
                     paddingTop: "0px",
                     width: "20vw",
                     marginLeft: "100px",
                     display: "inline-block"}}>
                    <h2>FINANCES</h2>
                    <h4>Pay your community dues, view your total community fund, and submit proposals to your community.</h4>
                    <Button 
                onClick={()=>{
                console.log("join community fund")}}
                style={{background: "#2F51C9", 
                        color: "#ffffff",
                        padding: "5" }}
                className={"hoverzoom"}
                >VIEW DASHBOARD </Button>
        </div>
    </div>
    
    <div className={"hoverzoom"} style={{textAlign: "left",
                     paddingTop: "30px",
                     display: "block",
                     width: "fit-content",
                     margin: "50px auto"}}>
        <div style={{textAlign: "left",
                     paddingTop: "0px",
                     width: "20vw",
                     marginRight: "100px",
                     display: "inline-block"}}>
                    <h2>COMMUNITY MEMBERS</h2>
                    <h4>VView a list of all current community members, and add new members to the community.</h4>
                    <Button 
                onClick={()=>{
                console.log("join community fund")}}
                style={{background: "#2F51C9", 
                        color: "#ffffff",
                        padding: "5" }}
                className={"hoverzoom"}
                >VIEW MEMBERS </Button>
        </div>
        <div style={{textAlign: "left",
                     maxWidth: "40vw",
                     display: "inline-block",
                     verticalAlign: "top"
                    }}>
                <img src={require('../members.png')}
                 style={{maxWidth : "260px",
                         maxHeight: "200px"}}/>
        </div>
    </div>

    </div>
  );
}
