import React from "react";
import Album from "./Album";

const AlbumList = ({ statePlayList, setNowPlaying }) => {
  return (
    <>
      {statePlayList.map((data, index) => (
        <Album
          key={index.toString()}
          thumbnail={data.thumbnail}
          movieId={data.videoKey}
          setNowPlaying={setNowPlaying}
          statePlayList={statePlayList}
        />
      ))}
    </>
  );
};

export default AlbumList;
