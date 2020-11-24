import React from "react";
import styles from "./video.module.css";

const Video = ({ video, video: { snippet }, onVideoClick }) => (
  <li className={styles.video} onClick={() => onVideoClick(video)}>
    <img
      className={styles.thumbnail}
      src={snippet.thumbnails.medium.url}
      alt="video thumbnail"
    />
    <div>
      <p className={styles.title}>{snippet.title}</p>
      <p className={styles.channel}>{snippet.channelTitle}</p>
    </div>
  </li>
);

export default Video;
