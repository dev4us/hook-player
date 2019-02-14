import React from "react";
import DetailPlaying from "./DetailPlaying";
import YouTube from "react-yt";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";

const LeftFrame = styled.div`
  width: 100%;
  height: 100%;
`;

const PlayerHiddenFrame = styled.div`
  display: none;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

const PlayBtn = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 3rem;
  color: white;
`;

const PauseBtn = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 3rem;
  color: white;
`;

const Player = ({ nowPlaying }) => {
  return (
    <>
      <LeftFrame>
        <YouTube
          videoId={nowPlaying.videoKey}
          autoplay={false}
          render={({ iframe, getPlayerState, playVideo, pauseVideo }) => {
            const isPlaying = getPlayerState() === 1;

            return (
              <>
                <PlayerHiddenFrame>{iframe}</PlayerHiddenFrame>
                <DetailPlaying nowPlaying={nowPlaying} />
                {isPlaying ? (
                  <PauseBtn
                    icon={faPauseCircle}
                    onClick={event => pauseVideo()}
                  />
                ) : (
                  <PlayBtn icon={faPlayCircle} onClick={event => playVideo()} />
                )}
              </>
            );
          }}
        />
      </LeftFrame>
    </>
  );
};

export default Player;
