import React from "react";
import { useState, useEffect } from "react";
import "./app.module.css";
import Header from "./components/header/header";
import Videos from "./components/videos/videos";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const handleSearch = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <>
      <Header onSearch={handleSearch} />
      <Videos videos={videos} />
    </>
  );
}

export default App;
