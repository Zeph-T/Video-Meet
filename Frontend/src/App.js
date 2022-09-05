// components imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Local components imports
import "./App.css";
import AuthPage from "./Components/auth";
import Home from "./Components/main";
import JoinMeet from "./Components/join_meet/JoinMeet";

// default app functional component
function App() {
  // render the app
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<AuthPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/meet/:id" element={<JoinMeet />} />
        </Routes>
      </Router>
    </div>
  );
}

// exported the app component as default
export default App;
