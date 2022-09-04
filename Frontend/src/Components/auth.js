// Packages imports
import React, { useState } from "react";

// Local components imports
import Login from "./login";
import Register from "./register";

// default AuthPage component
// This contains the login and register toggler
function AuthPage() {
  // Local States
  const [showLogin, setShowLogin] = useState(true);

  // function to handle toggler button press
  const onToggle = () => setShowLogin(!showLogin);

  // Render According to the state
  return showLogin ? <Login onToggle={onToggle} /> : <Register onToggle={onToggle} />;
}

export default AuthPage;
