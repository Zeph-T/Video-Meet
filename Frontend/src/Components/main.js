import React, { useState,useEffect } from "react";
//import  {Navigate } from 'react-router-dom'
import "./login.css";
import {useDispatch, useSelector} from "react-redux";
import img1 from "../images/graphic2.png";
import img2 from "../images/Vector.png"
import one from "../images/sec.png";
import two from "../images/1.png"
import three from "../images/2.png"
import {logout} from "../actions/signin"
import { useNavigate } from "react-router";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";\
//import Dropdown from 'react-bootstrap/Dropdown';
import Footer from "./footer";
import { Link } from "react-router-dom";
function Home() {

  //const [login,setLogin]=useState(false);
  const [link, setLink] = useState("");
  const {isAuthenticated} = useSelector((state)=>state.userSignin)
  const history=useNavigate();
  const dispatch=useDispatch();
  useEffect(() => {
   
  },[isAuthenticated]);

  function dec2hex (dec) {
    return dec.toString(16).padStart(2, "0")
  }
  
  function generateId (len) {
    var arr = new Uint8Array((len || 40) / 2)
    window.crypto.getRandomValues(arr)
    return Array.from(arr, dec2hex).join('')
  }
  const handleLogout=()=>{
    dispatch(logout());
    window.location.href = "/";
  }
  const initMeeting=()=>{
    console.log("abcd");
    let meetId = generateId(8);
    console.log(meetId);
    window.location.href = `/meet/${meetId}`;
  }

  const goToMeeting=()=>{
    window.location.href = link.trim();
  }
  
  return (
    <>
    <div
      className="Home"
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        padding: "40px 50px 40px",
        marginTop: "-1px",
        fontFamily:"sans-serif"
      }}
    >
      <div style={{
        display: "flex",
        flexDirection: "row",
        textAlign: "left"
      }}>
      <img src={img2} style={{width:"35px",height:"40px",marginRight:"20px"}} alt="image1"></img> <h1 style={{color:"white"}}>MEETING APP</h1>
      <div style={{position:"absolute",right:"5%",top:"40px"}}>
        
       
      {/* <i class="fas fa-user " style={{fontSize:"1.7em"}} ></i> */}
      <div class="dropdown">
        <button class="dropbtn"> <i class="fas fa-user " style={{fontSize:"1.7em"}} ></i></button>
        <div class="dropdown-content">
        {!isAuthenticated && <Link to="/login" >Login</Link>}
        {isAuthenticated && <Link to="#" onClick={handleLogout}>Logout</Link>}
        </div>
      </div>

     
      </div>
      
      </div>
      
      <div style={{ marginTop: "80px" }}>
        <h2 style={{color:"white"}}>Start your next video call with a single click.</h2>
        <h2 style={{ marginTop: "-10px",color:"white" }}>Simple, Secure, Fast.</h2>
      </div>

      <div style={{ display: "flex", flexDirection: "row", marginTop: "0px" }}>
        <div style={{ display: "flex", flexDirection: "column", paddingTop: "10%" }}>
          <p> No download, plug-in, or login is required. Just get straight to <br></br>talking, messaging, and sharing your screen.</p>
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
                height:"45px"
              }}
              onClick={initMeeting}
            >
              New Meeting
            </button>
            <input
              placeholder="Enter link"
              value={link}
              onChange={(e)=>{setLink(e.target.value)}}
              className="glass-morph"
              // type="submit"
              
              style={{
                width: "250px",
                marginLeft: "30px",
                fontSize: "20px",
                color: "white",
                 background: "black",
                outline: "none",
                borderRadius: "15px",
                height:"45px",
                paddingLeft:"10px",
                paddingRight:"45px"
              }}
            />
            {(link.trim().length > 0) && <button className="button glass-morph" style={{width:"30px",heigth:"20px", marginTop:"0px", marginLeft: "-32px"}} onClick={goToMeeting}> <i class="fas fa-arrow-right"></i> </button>}
          </div>
        </div>
        <div>
          <img src={img1} style={{ width: "630px", marginLeft: "45%" }} alt="image1"></img>
        </div>
      </div>
     
    </div>
     <div className="mainp">
     {/* <div style={{paddingTop:"20px",paddingBottom:"50px",paddingRight:"450px"}}>
      <h2 style={{fontWeight:"600"}}>WEBCAM STREAMING</h2>

         <p>Having the webcam on, allows participants to make a deeper connection with you, with high resolution </p>
      </div> */}
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
         <div><img src={two} alt="done" style={{width:"250px",marginTop:"50px"}}></img></div>
         <div style={{paddingLeft:"40px",paddingTop:"120px"}}>
         <h2 style={{fontWeight:"600",color:"white"}}>WEBCAM STREAMING</h2>

<p>Having the webcam on, allows participants to make a deeper connection with you, with high resolution </p>
         </div>
     </div>
     <div  style={{display:"flex",flexDirection:"row",justifyContent:"space-around",marginTop:"30px"}}>
      
      <div style={{paddingRight:"40px",paddingTop:"120px"}}>
          <h2 style={{fontWeight:"600",color:"white"}}>MAXIMUM SECURITY
</h2>
          <p>End-to-end state-of-the-art encryption means your participants are exactly that. Your calls.</p>
      </div>
      <div><img src={three} alt="done" style={{width:"300px",marginTop:"30px"}}></img></div>
  </div>
     <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",marginTop:"30px",marginBottom:"40px"}}>
         <div><img src={one} alt="done" style={{width:"180px",marginTop:"50px",marginLeft:"30px"}}></img></div>
         <div style={{paddingLeft:"40px",paddingTop:"120px"}}>
             <h2 style={{fontWeight:"600",color:"white"}}>TOTAL PRIVACY
</h2>
             <p>Data stays between you and your participants. MiroTalk doesn't collect or share personal information. It's built for privacy first.</p>
         </div>
     </div>
    
    
  
     </div>
     <Footer />
     </>
  );
}

export default Home;
