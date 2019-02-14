import React from "react";

const Album = ({ thumbnail, movieId, statePlayList, setNowPlaying }) => {
  return (
    <div>
      <img
        src={thumbnail}
        onClick={() =>
          setNowPlaying(statePlayList.find(val => val.videoKey === movieId))
        }
        alt="albumThumnail"
      />
    </div>
  );
};

export default Album;
