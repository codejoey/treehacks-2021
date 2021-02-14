/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { Button } from "antd";
import "./Welcome.css";
import sal from "sal.js";
import "sal.js/dist/sal.css";


export default function Welcome() {


  const history = useHistory();

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
                // data-sal="fade"
                //   data-sal-duration="800"
                  style={buttonStyle}
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
                 margin: "60px auto",
                 width: "50vw"}}>
    <h1>What is BlockFund?</h1>
    <h4 style={{fontWeight: "400"}}>BlockFund is a decentralised autonomous organisation which democratises community funds. BlockFund allows residents to vote for a project they want in a transparent process. BlockFund highlights the need for environment sustainability projects through ArcGIS mapping, and aids civilians/government to plan a community through cultural urban planning</h4>
    </div >
    
    <div className={"hoverzoom"} style={{textAlign: "left",
                     paddingTop: "30px",
                     display: "block",
                     width: "fit-content",
                     margin: "50px auto"}}>
        <div style={{textAlign: "left",
                     paddingTop: "30px",
                     width: "30vw",
                     marginRight: "100px",
                     display: "inline-block"}}>
                    <h2>COMMUNITY PROPOSALS</h2>
                    <h4 style={{margin: "20px 0", fontWeight: "400"}}>View a list of all the active proposals in the community and vote to support it! Click on a proposal to view details, relevant documents, and leave comments.</h4>
                <Button 
                //onClick={()=> history.push("/proposals")}
                style={buttonStyle}
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
                     width: "30vw",
                     marginLeft: "100px",
                     display: "inline-block"}}>
                    <h2>FINANCES</h2>
                    <h4 style={{margin: "20px 0", fontWeight: "400"}}>Pay your community dues, view your total community fund, and submit proposals to your community.</h4>
                    <Button 
                onClick={()=>{
                console.log("join community fund")}}
                style={buttonStyle}
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
                     width: "30vw",
                     marginRight: "100px",
                     display: "inline-block"}}>
                    <h2>COMMUNITY MEMBERS</h2>
                    <h4 style={{margin: "20px 0", fontWeight: "400"}}>View a list of all current community members, and add new members to the community.</h4>
                    <Button 
                onClick={()=>{
                console.log("join community fund")}}
                style={buttonStyle}
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
