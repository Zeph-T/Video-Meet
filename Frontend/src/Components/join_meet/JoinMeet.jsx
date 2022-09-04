import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import "./JoinMeet.css";

function JoinMeet() {
  const [meetDetails, setMeetDetails] = useState({});

  return (
    <div className="join-meet">
      <div className="preview">
        <div className="video-preview glass-morph"></div>
        <div className="video-audio-btn">
          <button className="video button glass-morph">
            <FontAwesomeIcon icon={faVideo} /> Video
          </button>
          <button className="Audio button glass-morph">
            <FontAwesomeIcon icon={faMicrophone} /> Audio
          </button>
        </div>
      </div>
      <div className="instructions">
        <h4>Waiting for someone to allow you in the meeting</h4>
      </div>
    </div>
  );
}

export default JoinMeet;
