import { useState } from "react";
import "./JoinMeet.css";

function JoinMeet() {
  const [meetDetails, setMeetDetails] = useState({});

  return (
    <div className="join-meet">
      <div className="preview">
        <div className="video-preview glass-morph"></div>
        <div className="video-audio-btn">
          <button className="video button glass-morph">Video</button>
          <button className="Audio button glass-morph">Audio</button>
        </div>
      </div>
    </div>
  );
}

export default JoinMeet;
