import React, { useState } from "react";
import "./login.css"
import elp1 from "../images/ellipse.png"


function Login() {
  const [studentEmail, setEmail] = useState("");
  const [studentPassword, setPassword] = useState("");
 
  const formhandler = (e) => {
    e.preventDefault();

  };
  return (
    <div className="head_login">
      <img src={elp1} style={{position:"absolute",top:"40%",right:"26%",zIndex:"1"}}></img>
      <div style={{paddingTop:"50px"}}>

      
      <div className="main_login" style={{display:"flex",flexDirection:"column"}}>
        <div style={{fontSize:"50px"}}>Log In</div>
        <div style={{fontSize:"30px",marginTop:"30px"}}>Email</div>
        <div>
            <input style={{width:"90%",height:"35px",border:"none",marginTop:"10px",outline:"none",borderRadius:"10px"}}></input>
        </div>
        <div style={{fontSize:"30px",marginTop:"30px"}}>Password</div>
        <div>
            <input style={{width:"90%",height:"35px",border:"none",marginTop:"10px",outline:"none",borderRadius:"10px"}}></input>
        </div>
        <div style={{textAlign:"center",marginTop:"70px",marginRight:"40px"}}>
           <button type="submit"  className="Button"  style={{width:"200px" ,fontSize:"20px",height:"40px",border:"none",outline:"none",borderRadius:"10px"}} >
              Login
            </button>
            <h4 style={{margin:"10px 0"}}>OR</h4>
            <button type="submit"  className="Button"  style={{width:"200px" ,fontSize:"20px",height:"40px",border:"none",outline:"none",borderRadius:"10px"}} >
              Login With Google
            </button>
        </div>
        
        </div>
      </div>
    </div>
  );
}

export default Login;
