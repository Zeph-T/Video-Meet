// components imports
import "./App.css";
//import logo from "./logo.svg";
import Login from "./Components/login";
import Home from "./Components/main";
import JoinMeet from "./Components/join_meet/JoinMeet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// default app functional component
function App() {
  // render the app
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/meet/:id" element={<JoinMeet />} />
        </Routes>
      </Router>
    </div>
  );
}

// exported the app component as default
export default App;
