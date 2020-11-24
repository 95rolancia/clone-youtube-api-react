import React from "react";
import { useState, useEffect } from "react";
import styles from "./app.module.css";
import Header from "./components/header/header";
import Videos from "./components/videos/videos";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const selectVideo = (video) => {
    setSelectedVideo(video);
  };
  const handleSearch = (query) => {
    youtube
      .search(query) //
      .then((videos) => {
        setVideos(videos);
        setSelectedVideo(null);
      });
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <>
      <Header onSearch={handleSearch} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <Videos videos={videos} onVideoClick={selectVideo} />
        </div>
      </section>
    </>
  );
}

export default App;
