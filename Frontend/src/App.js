// components imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
// Local components imports
import "./App.css";
import AuthPage from "./Components/auth";
import Home from "./Components/main";
import JoinMeet from "./Components/join_meet/JoinMeet";
import store from "./store"
import SignUp from "./Components/signup";
// default app functional component
const App=()=> {
  // render the app
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/meet/:id" element={<JoinMeet />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

// exported the app component as default
export default App;
