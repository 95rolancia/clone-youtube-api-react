import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Video from "../video/video";
import styles from "./videos.module.css";
const Videos = (props) => {
  const [videos, setvideos] = useState([]);

  const handleThumbnail = (event) => {
    console.log(event.target);
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAJOXsk6KfHQfhZq65pYyQboajYcWiDER8",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setvideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  console.log(videos);
  return (
    <>
      <ul className={styles.videos}>
        {videos.map((video) => (
          <Video video={video} />
        ))}
      </ul>
    </>
  );
};

export default Videos;
