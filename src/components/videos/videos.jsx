import React from "react";
import Video from "../video/video";
import styles from "./videos.module.css";
const Videos = ({ videos, onVideoClick }) => {
  return (
    <ul className={styles.videos}>
      {videos.map((video) => (
        <Video key={video.id} video={video} onVideoClick={onVideoClick} />
      ))}
    </ul>
  );
};

export default Videos;
