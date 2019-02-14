import React from "react";
import YouTube from "react-yt";

const Player = ({ movieUrl }) => {
  return (
    <>
      <YouTube videoId={movieUrl} autoplay={true} />
    </>
  );
};

export default Player;
