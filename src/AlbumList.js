import React from "react";
import Album from "./Album";

const AlbumList = ({ statePlayList, setMovieUrl }) => {
  return (
    <>
      {statePlayList.map((data, index) => (
        <Album
          key={index.toString()}
          thumbnail={data.thumbnail}
          movieId={data.videoKey}
          setMovieUrl={setMovieUrl}
        />
      ))}
    </>
  );
};

export default AlbumList;
