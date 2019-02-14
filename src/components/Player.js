import React from "react";
import YouTube from "react-yt";
import styled from "styled-components";

const PlayerFrame = styled.div`
  display: none;
  border: 5px solid white;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

const Player = ({ nowPlaying }) => {
  return (
    <>
      <PlayerFrame>
        <YouTube videoId={nowPlaying.videoKey} autoplay={false} />
      </PlayerFrame>
    </>
  );
};

export default Player;
