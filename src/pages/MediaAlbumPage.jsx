import React from "react";
import { useLocation } from "react-router-dom";
import "./MediaAlbumPage.css";
import MasonryLayout from "../components/MasonryLayout/MasonryLayout";
import TopSection from "../components/TopSection/TopSection";

const MediaAlbumPage = () => {
  const location = useLocation();
  const album = location.state?.album;

  return (
    <>
      <TopSection navigateTo={"/media"} title={album.title} />
      <div className="page-container" style={{ marginTop: "5.185vh" }}>
        <MasonryLayout data={album} />
      </div>
    </>
  );
};

export default MediaAlbumPage;
