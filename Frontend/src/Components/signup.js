// Packages imports
import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
//import jwt_decode from "jwt-decode";
import { useHistory } from "react-router";
// Local imports
import "./login.css";
import elp1 from "../images/ellipse.png";
import {signup} from "../actions/signin.js"
import { useNavigate,Navigate } from "react-router-dom";
import Login from "../Components/login.js";
// functional component for Login
function SignUp({ onToggle }) {
  // Local States
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch=useDispatch();
  const history=useNavigate();
  const {signupstate} = useSelector((state)=>state.userSignin)
  //const {isAuthenticated} = useSelector((state)=>state.userSignin)

  const buttonDisabled = email.length === 0 || password.length === 0;

  // login button will have a backgorund Color depending upon the buttonDisabled state
  const loginBackColor = buttonDisabled ? "rgba(255, 255, 255, 0.4)" : "dodgerblue";

  // function to handle Login button press
  const onLoginPress = e => {
    try {
      e.preventDefault();
      console.log(name,email, password);
      dispatch(signup(name,email,password));
      console.log(signupstate);
      history.push("/");
    } catch (error) {
        console.log(error);
    }
  };
  if (signupstate) {
    return <Navigate to="/" />;
  }
  // useEffect(()=>{

  //   if (signupstate) {
  //     history.push("/");
  //   }
  // },[signupstate])


  // renders the component
  return (


    <div className="head_login">
      <div style={{ paddingTop: "50px",color:"black" }}>
        <div className="main_login" style={{ display: "flex", flexDirection: "column" }}>
          <img alt="" src={elp1} style={{ position: "absolute", top: "40%", right: "-34%", zIndex: "1" }}></img>

          <div style={{ fontSize: "50px",color:"white" }}>SIGN UP</div>
          <div style={styles.fieldTitle}>Name</div>
          <div>
            <input style={styles.inputBox} onChange={e => setName(e.target.value)}></input>
          </div>

          <div style={styles.fieldTitle}>Email</div>
          <div>
            <input style={styles.inputBox} onChange={e => setEmail(e.target.value)}></input>
          </div>

          <div style={styles.fieldTitle}>Password</div>
          <div>
            <input style={styles.inputBox} onChange={e => setPassword(e.target.value)}></input>
          </div>

          <div style={{ textAlign: "center", marginTop: "70px", marginRight: "40px" }}>
            <button
              type="submit"
              className="button glass-morph"
              style={{ ...styles.buttons, backgroundColor: loginBackColor }}
              onClick={onLoginPress}
              disabled={buttonDisabled}
            >
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
}

// exporting the Login component
export default SignUp;

// styles for the component
const styles = {
  inputBox: {
    width: "90%",
    height: "35px",
    border: "none",
    marginTop: "10px",
    outline: "none",
    borderRadius: "10px",
    paddingLeft: "10px",
  },
  buttons: {
    width: "200px",
    fontSize: "20px",
    height: "40px",
    outline: "none",
    borderRadius: "10px",
  },
  fieldTitle: { fontSize: "30px", marginTop: "30px",color:"white" },
};
