import React from "react";

const Album = ({ thumbnail, movieId, setMovieUrl }) => {
  return (
    <div>
      <img src={thumbnail} onClick={() => setMovieUrl(movieId)} />
    </div>
  );
};

export default Album;
