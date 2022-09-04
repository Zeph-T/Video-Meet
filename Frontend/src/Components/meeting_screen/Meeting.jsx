import { useState, useEffect, useRef } from "react";
import {
  faInfo,
  faMicrophone,
  faMicrophoneSlash,
  faPeopleGroup,
  faPhoneSlash,
  faVideo,
  faVideoSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Meeting.css";

function Meeting() {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);

  const videoRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 720 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
  };

  let toggleVideo = () => setIsVideoOn(prev => !prev);
  let toggleAudio = () => setIsAudioOn(prev => !prev);

  return (
    <div className="meeting-screen">
      Meeting Screen
      <div className="video-area">
        <video ref={videoRef} />
      </div>
      <div className="footer">
        <div className="info">
          <button className="button glass-morph" style={{ width: "50px" }}>
            <FontAwesomeIcon icon={faInfo} />
          </button>
        </div>
        <div className="controls">
          <button className="button glass-morph" style={{ width: "80px" }} onClick={toggleVideo}>
            <FontAwesomeIcon icon={isVideoOn ? faVideo : faVideoSlash} />
          </button>
          <button className="button glass-morph" style={{ width: "80px" }} onClick={toggleAudio}>
            <FontAwesomeIcon icon={isAudioOn ? faMicrophone : faMicrophoneSlash} />
          </button>
          <button className="button glass-morph" style={{ width: "80px", color: "red" }}>
            <FontAwesomeIcon icon={faPhoneSlash} />
          </button>
        </div>
        <div className="participants">
          <button className="button glass-morph" style={{ width: "50px" }}>
            <FontAwesomeIcon icon={faPeopleGroup} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Meeting;
