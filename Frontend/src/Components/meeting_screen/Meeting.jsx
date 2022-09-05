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
import users from "./data";
import "./Meeting.css";

function Meeting() {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [audioStream, setAudioStream] = useState(null);
  const [vHeight, setVHeight] = useState("600px");
  const [userDetails, setUserDetails] = useState(users);

  const videoRef = useRef(null);
  const videoAreaRef = useRef(null);

  useEffect(() => {
    getVideo();
    getAudio();
    getUserVideos();
  }, [videoRef]);

  const getUserVideos = () => {
    let videoArea = videoAreaRef.current;
    userDetails.forEach((user, i) => {
      const node = document.createElement("img");
      node.src = user.url;
      node.alt = i;
      videoArea.appendChild(node);
    });
    // videoArea.appendChildren(children);
  };

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 720 } })
      .then(stream => {
        let video = videoRef.current;
        if (!video) return;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
  };

  const stopVideo = e => {
    let video = videoRef.current;
    if (!video) return;
    const stream = video.srcObject;
    const tracks = stream.getTracks();

    for (let i = 0; i < tracks.length; i++) {
      let track = tracks[i];
      track.stop();
    }

    video.srcObject = null;
  };

  const getAudio = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: false })
      .then(stream => {
        setAudioStream(stream);
      })
      .catch(err => {
        console.error("error:", err);
      });
  };

  const stopAudio = () => {
    if (audioStream) {
      const tracks = audioStream.getTracks();

      for (let i = 0; i < tracks.length; i++) {
        let track = tracks[i];
        track.stop();
      }
      setAudioStream(null);
    }
  };

  let toggleVideo = function () {
    isVideoOn ? stopVideo() : getVideo();
    setIsVideoOn(prev => !prev);
  };
  let toggleAudio = function () {
    isAudioOn ? stopAudio() : getAudio();
    setIsAudioOn(prev => !prev);
  };

  return (
    <div className="meeting-screen">
      {/* Meeting Screen
      {audioStream && <p>Mic is onnn!!!</p>} */}
      <div className="video-area" ref={videoAreaRef}>
        {isVideoOn ? (
          <video className="video" id="self-video" ref={videoRef} height={vHeight} />
        ) : (
          <div className="self-video-placeholder" style={{ height: vHeight }}>
            <img
              src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
              alt="user-img"
              style={{ height: "50%" }}
            />
          </div>
        )}
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
