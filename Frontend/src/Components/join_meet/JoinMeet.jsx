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
      <div className="instructions">
        <h4>Waiting for someone to allow you in the meeting</h4>
      </div>
    </div>
  );
}

export default JoinMeet;
