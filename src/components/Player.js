import React from "react";
import YouTube from "react-yt";

const Player = ({ nowPlaying }) => {
  return (
    <>
      <YouTube videoId={nowPlaying.videoKey} autoplay={false} />
    </>
  );
};

export default Player;
