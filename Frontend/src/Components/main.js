import React, { useState } from "react";
import "./login.css";
import img1 from "../images/graphic2.png";
//import img2 from "../images/graphic3.png"

function Home() {
  return (
    <div
      className="Home"
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        padding: "40px 50px 0px",
        marginTop: "-7px",
      }}
    >
      <h1>MEETING APP</h1>
      <div style={{ marginTop: "40px" }}>
        <h2>Lorem ipsum dolor shit.</h2>
        <h2 style={{ marginTop: "-10px" }}>Now for everyone.</h2>
      </div>

      <div style={{ display: "flex", flexDirection: "row", paddingTop: "10px" }}>
        <div style={{ display: "flex", flexDirection: "column", paddingTop: "10%" }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, etiam ac sapien ac urna luctus lacinia.</p>
          <div style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}>
            <button
              className="button glass-morph"
              type="submit"
              style={{
                width: "200px",
                fontSize: "20px",
                color: "#FFFFFF",
                background: "#8860D088",
                outline: "none",
                borderRadius: "15px",
              }}
            >
              New Meeting
            </button>
            <button
              className="button glass-morph"
              type="submit"
              style={{
                width: "250px",
                marginLeft: "30px",
                fontSize: "20px",
                color: "#FFFFFF",
                background: "#1E90FF88",
                outline: "none",
                borderRadius: "15px",
              }}
            >
              Enter code or link
            </button>
          </div>
        </div>
        <div>
          <img src={img1} style={{ width: "85%", marginLeft: "90px" }} alt="image"></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
