import React from "react";
import user_avatar from "../../assets/user-avatar.png";
import video_test from "../../assets/video-test.png";
import "./Video.css";

function Video() {
  return (
    <div className="video-container">
      <img className="video-thumbnail" src={video_test} alt="Video" />

      <img src={user_avatar} alt="User" />
      <span className="video-title">
        Video title foo bar Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Voluptates, similique!
      </span>
    </div>
  );
}

export default Video;
