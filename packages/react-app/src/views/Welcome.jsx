/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { Button, Card } from "antd";
import "./Welcome.css";
import sal from "sal.js";
import "sal.js/dist/sal.css";


export default function Welcome() {

  const cardStyle = {
        boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
        width: "25%",
        display: "inline-block",
        verticalAlign: "top",
        margin: "0.5rem",
        background: "#fff" ,
        };

  const history = useHistory();

    const buttonStyle = {
        background: "rgb(47, 67, 245)",
        border: "none",
        width: "50%",
        fontSize: "16px",
        borderRadius: "6px",
        color: "#fff",
        padding: "0.5rem",
        cursor: "pointer"
      }

  useEffect(() => { sal() }, []);

  return (
      <div>
    <div style={{ background: "#F5F9FF", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{width: "fit-content",
                     margin: "0px auto"}}>
        <div style={{textAlign: "left",
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
                        marginBottom: "30px",
                        marginTop: "-20px"}}>powered by BlockFund</h4>
            <h4 style={{fontWeight: "400",
                        marginBottom: "30px"}}>A fully decentralized community governance platform powered by blockchain technology.</h4>

            <button 
                onClick={()=>{
                console.log("join community fund")}}
                // data-sal="fade"
                //   data-sal-duration="800"
                  style={buttonStyle}
                className={"hoverzoom"}
                >Join Community Fund</button>

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
    <h1         data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="800">What is BlockFund?</h1>
    <h4         data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="900" style={{fontWeight: "400"}}>BlockFund is a decentralised autonomous organisation which democratises community funds. BlockFund allows residents to vote for a project they want in a transparent process. BlockFund highlights the need for environment sustainability projects through ArcGIS mapping, and aids civilians/government to plan a community through cultural urban planning</h4>
    </div >

    <div style={{ background: "#F5F9FF", borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)", padding: "2rem 6rem" }}>
      <h1
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="800"
      >How does BlockFund work?</h1>
      <h3
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="900"
        style={{ marginBottom: "2rem" }}
      >in <span style={{ color: "#2F51C9" }}>three</span> simple steps:</h3>
      <div style={{height: "fit-content"}}>
      <Card
        data-sal="slide-up"
        data-sal-delay="400"
        data-sal-duration="900"
        title="Step 1: Pay Monthly Fees"
        style={cardStyle}
      >
        <img src={require('../coin.png')}
                style={{maxWidth : "100px",
                maxHeight: "100px",
                marginBottom: "20px"}}/>
        <p>Pay your monthly fees to the community to maintain and better your community.</p>
      </Card>
      <Card
        data-sal="slide-up"
        data-sal-delay="500"
        data-sal-duration="900"
        title="Step 2: Submit Proposals"
        style={cardStyle}
      >
        <img src={require('../contract.png')}
        style={{maxWidth : "100px",
        maxHeight: "100px",
        marginBottom: "20px"}}/>
        <p>Dream up the improvements you would like to see in your community and submit a proposal.</p>
      </Card>
      <Card
        data-sal="slide-up"
        data-sal-delay="600"
        data-sal-duration="900"
        title="Step 3: Vote For Proposals"
        style={cardStyle}
      >
        <img src={require('../online-voting.png')}
        style={{maxWidth : "100px",
        maxHeight: "100px",
        marginBottom: "20px"}}/>
        <p>Everyone in the community can vote "yes" or "no" to every proposal.</p><br></br>
      </Card>
      </div>
    </div>
    
    <div data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="800"
        style={{textAlign: "left",
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
                <button 
                //onClick={()=> history.push("/proposals")}
                style={buttonStyle}
                className={"hoverzoom"}
                >VIEW PROPOSALS </button>
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

    <div data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="900"
        style={{textAlign: "left",
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
                    <button 
                onClick={()=>{
                console.log("join community fund")}}
                style={buttonStyle}
                className={"hoverzoom"}
                >VIEW DASHBOARD </button>
        </div>
    </div>
    
    <div data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="900"
        style={{textAlign: "left",
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
                    <button 
                onClick={()=>{
                console.log("join community fund")}}
                style={buttonStyle}
                className={"hoverzoom"}
                >VIEW MEMBERS </button>
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
