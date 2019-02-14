import { useState } from "react";

const handlePlayer = initial => {
  const [nowPlaying, setNowPlaying] = useState(initial);

  return {
    nowPlaying,
    setNowPlaying
  };
};

export default handlePlayer;
