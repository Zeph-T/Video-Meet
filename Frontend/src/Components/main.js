import React, { useState } from "react";
import "./login.css"
import img1 from "../images/graphic1.png"


function Home() {
 
  return (
    <div style={{display:"flex"}}>
        <h1>Lorem ipsum dolor shit.</h1>
        <h1>Now for everyone.</h1>
        <div style={{display:"flex",flexDirection:"row"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                   etiam ac sapien ac urna luctus lacinia.</p>
            </div>
            <div>
                 <img src={img1} alt="image"></img>
            </div>

        </div>
    </div>
  );
}

export default Home;
