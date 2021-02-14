import React from "react";


// displays a page header

export default function Footer() {
  return (
    <div style={{background: "#F5F9FF",
    marginTop: "70px",
    height: "fit-content"
    }}>



    <div style={{width: "100%",
    display: "inline-block",}}>
    <img src={require('../PAFlogo.png')}
          style={{maxWidth : "100px",
                  maxHeight: "100px",
                  float: "right",
                  marginTop: "30px",
                  marginRight: "60px"}}/>
    </div>

    <h3>© Palo Alto Fund 2021 - All Rights Reserved</h3>


    </div>
  );
}
