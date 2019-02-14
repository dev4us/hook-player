import { useState } from "react";

const handlePlayer = initialVideoKey => {
  const [movieUrl, setMovieUrl] = useState(initialVideoKey);

  return {
    movieUrl,
    setMovieUrl
  };
};

export default handlePlayer;
