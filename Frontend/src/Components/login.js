import React, { useState } from "react";
import "./login.css"



function Login() {
  const [studentEmail, setEmail] = useState("");
  const [studentPassword, setPassword] = useState("");
 
  const formhandler = (e) => {
    e.preventDefault();

  };
  return (
    <div >
      <div className="main_login" style={{display:"flex",flexDirection:"column"}}>
        <div style={{fontSize:"50px"}}>Log In</div>
        <div style={{fontSize:"30px",marginTop:"30px"}}>Email</div>
        <div>
            <input style={{width:"90%",height:"35px",border:"none",marginTop:"10px",outline:"none"}}></input>
        </div>
        <div style={{fontSize:"30px",marginTop:"30px"}}>Password</div>
        <div>
            <input style={{width:"90%",height:"35px",border:"none",marginTop:"10px",outline:"none"}}></input>
        </div>
        <div style={{textAlign:"center",marginTop:"70px",marginRight:"40px"}}>
           <button type="submit"    style={{width:"300px" ,fontSize:"20px",color:"#FFFFFF",background:"#8860D0",height:"40px",border:"none",outline:"none"}} >
              Login
            </button>
            <h4 style={{margin:"10px 0"}}>OR</h4>
            <button type="submit"    style={{width:"200px" ,fontSize:"20px",color:"#FFFFFF",background:"#1E90FF",height:"40px",border:"none",outline:"none"}} >
              Login With Google
            </button>
        </div>
        

      </div>
    </div>
  );
}

export default Login;
