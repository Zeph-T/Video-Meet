// Packages imports
import React, { useState } from "react";

// Local imports
import "./login.css";
import elp1 from "../images/ellipse.png";

// functional component for Register
function Register({ onToggle }) {
  // Local States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // This disables the submit button if inputs are empty
  const buttonDisabled = email.length === 0 || password.length === 0 || confirmPassword.length === 0;

  // register button will have a backgorund Color depending upon the buttonDisabled state
  const registerBackColor = buttonDisabled ? "rgba(255, 255, 255, 0.4)" : "dodgerblue";

  // function to handle Register button press
  const onRegisterPress = e => {
    try {
      e.preventDefault();
      console.log(email, password, confirmPassword);

      if (password !== confirmPassword) {
        // Show Alert here that passwords do not match
      }
    } catch (error) {}
  };

  // renders the component
  return (
    <div className="head_login">
      <div style={{ paddingTop: "50px" }}>
        <div className="main_login" style={{ display: "flex", flexDirection: "column" }}>
          <img src={elp1} style={{ position: "absolute", top: "40%", right: "-34%", zIndex: "1" }} alt=""></img>

          <div style={{ fontSize: "50px" }}>Sign Up</div>

          <div style={styles.fieldTitle}>Email</div>
          <div>
            <input style={styles.inputBox} onChange={e => setEmail(e.target.value)}></input>
          </div>

          <div style={styles.fieldTitle}>Password</div>
          <div>
            <input style={styles.inputBox} onChange={e => setPassword(e.target.value)}></input>
          </div>

          <div style={styles.fieldTitle}>Confirm Password</div>
          <div>
            <input style={styles.inputBox} onChange={e => setConfirmPassword(e.target.value)}></input>
          </div>

          <div style={{ textAlign: "center", marginTop: "20px", marginRight: "40px" }}>
            <button
              type="submit"
              className="button glass-morph"
              style={{ ...styles.buttons, backgroundColor: registerBackColor }}
              onClick={onRegisterPress}
              disabled={buttonDisabled}
            >
              Register
            </button>

            <h5 style={{ margin: "20px 0" }} onClick={onToggle}>
              Already a user? Login
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

// exporting the Register component
export default Register;

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
  fieldTitle: { fontSize: "30px", marginTop: "30px" },
};
