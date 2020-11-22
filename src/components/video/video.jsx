import React from "react";
import "./video.module.css";

const Video = (props) => <img src={props.video.snippet.thumbnails.medium} />;

export default Video;
