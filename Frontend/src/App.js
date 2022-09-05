// components imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Local components imports
import "./App.css";
import AuthPage from "./Components/auth";
import Home from "./Components/main";
import JoinMeet from "./Components/join_meet_screen/JoinMeet";
import Video from "./Components/meeting_screen/Video";

// default app functional component
function App() {
  // render the app
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<AuthPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/join-meet/:id" element={<JoinMeet />} />
          <Route path="/meet/:id" element={<Video />} />
        </Routes>
      </Router>
    </div>
  );
}

// exported the app component as default
export default App;
