// Packages imports
import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import {useDispatch,useSelector} from "react-redux";

// Local imports
import "./login.css";
import elp1 from "../images/ellipse.png";
import { Link, Navigate } from "react-router-dom";
import {signin} from "../actions/signin";
import { useNavigate } from "react-router-dom";
// functional component for Login
function Login({ onToggle }) {
  // Local States
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const history=useNavigate();
  const {isAuthenticated} = useSelector((state)=>state.userSignin)
  // Initialize Google
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: '177508630598-vuiuioqqhoh2ceho7s71qmhgarejc4pk.apps.googleusercontent.com',
      callback: onGoogleSuccessResponse,
    });

    google.accounts.id.renderButton(document.getElementById("google-button"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  // This disables the submit button if inputs are empty

  const buttonDisabled = email.length === 0 || password.length === 0;

  // login button will have a backgorund Color depending upon the buttonDisabled state
  const loginBackColor = buttonDisabled ? "rgba(255, 255, 255, 0.4)" : "dodgerblue";

  // function to handle Login button press
  const onLoginPress = e => {
    try {
      e.preventDefault();
      console.log(email, password);
      dispatch(signin({email,password}))
    } catch (error) {}
  };
  // const handleSignUp=()=>{
  //   <Navigate to="/signup" />
  // }

  // function to handle Google button press
  const onGoogleSuccessResponse = response => {
    try {
      // console.log("Response from Google", response.credential);
      const decoded = jwt_decode(response.credential);
      // console.log("Decoded", decoded);
      dispatch(signin({email : decoded.email , token : response.credential , name : decoded.given_name , isOAuth : true  }))
    } catch (error) {
      console.log(error);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  // renders the component
  return (
    <div className="head_login">
      <div style={{ paddingTop: "50px" }}>
        <div className="main_login" style={{ display: "flex", flexDirection: "column" }}>
          <img alt="" src={elp1} style={{ position: "absolute", top: "40%", right: "-34%", zIndex: "1" }}></img>

          <div style={{ fontSize: "50px" }}>Log In</div>

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
              Login
            </button>

            <h4 style={{ margin: "10px 0" }}>OR</h4>

            <div id="google-button" style={{ textAlign: "center",marginBottom:"10px" }}></div>

            <Link to="/signup" style={{color:"black"}}>
              Don't have an account? Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// exporting the Login component
export default Login;

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
    color:"black"
  },
  buttons: {
    width: "200px",
    fontSize: "20px",
    height: "40px",
    outline: "none",
    borderRadius: "10px",
  },
  fieldTitle: { fontSize: "30px", marginTop: "30px" },
};
