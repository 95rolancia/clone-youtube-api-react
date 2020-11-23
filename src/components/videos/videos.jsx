import React from "react";
import Video from "../video/video";
import styles from "./videos.module.css";
const Videos = (props) => {
  return (
    <ul className={styles.videos}>
      {props.videos.map((video) => (
        <Video video={video} />
      ))}
    </ul>
  );
};

export default Videos;
