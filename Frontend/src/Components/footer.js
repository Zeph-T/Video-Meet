import React from "react";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#2A0944", color: "white", marginTop: "-10px", fontFamily: "sans-serif" }}>
      <div
        style={{
          borderTop: "1px solid white",
          borderBottom: "1px solid white",
          textAlign: "center",
          margin: "10px 40px",
          marginBottom: "60px",
        }}
      >
        <p style={{ paddingTop: "10px", fontWeight: "bolder" }}>Featured downloads</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", marginBottom: "30px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <i class="fa fa-facebook-square fa-lg"></i>
          <i style={{ paddingLeft: "20px" }} class="fa fa-linkedin fa-lg"></i>
          <i style={{ paddingLeft: "20px" }} class="fa fa-twitter-square fa-lg"></i>
          <i style={{ paddingLeft: "20px" }} class="fa fa-instagram fa-lg"></i>
        </div>
        <div style={{ display: "flex", fontWeight: "bolder", fontSize: "14px", paddingLeft: "260px" }}>
          <p>Copyright © 2022 Bug Chasers. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
