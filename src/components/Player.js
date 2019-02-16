import React from "react";
import DetailPlaying from "./DetailPlaying";
import YouTube from "react-yt";
import styled from "styled-components";
import { toast } from "react-toastify";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faPauseCircle,
  faChevronCircleLeft,
  faChevronCircleRight
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
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
const Controller = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;

  padding-top: 5%;
`;
const DurationStatus = styled.div`
  width: 100%;
  height: 35px;
  color: white;
  font-size: 0.8rem;
  text-align: right;
  letter-spacing: 0.1rem;
`;

const DurationBar = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.5);
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 5px;
    height: 20px;
    background: white;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 5px;
    height: 20px;
    background: white;
    cursor: pointer;
  }
`;

const RemotePlayer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const PlayPauseBtn = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 3rem;
  color: white;
  margin-left: 5px;
  margin-right: 5px;
`;

const ArrowBtn = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 2rem;
  color: white;
`;

const Player = ({ nowPlaying, statePlayList, setNowPlaying }) => {
  return (
    <>
      <LeftFrame>
        <YouTube
          videoId={nowPlaying.videoKey}
          autoplay={false}
          render={({
            iframe,
            getPlayerState,
            getCurrentTime,
            getDuration,
            playVideo,
            pauseVideo,
            seekTo
          }) => {
            const isPlaying = getPlayerState() === 1;
            const formatTime = time => {
              if (time === 0) {
                return "0:00";
              }
              const minutes = Math.floor(time / 60);
              const seconds = time - minutes * 60;
              return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
            };
            const getProcessPer = (current, duration) => {
              if (
                typeof current === undefined ||
                typeof duration === undefined ||
                duration === 0
              ) {
                return 0;
              }
              return Math.ceil((current / duration) * 100);
            };
            const moveCurrent = (value, duration) => {
              if (typeof value !== undefined && typeof duration !== undefined) {
                playVideo();
                seekTo(Math.ceil((value / 100) * duration));
              }
            };
            const prevPlay = () => {
              // turn nextMusic
              const nowIndex = statePlayList.findIndex(
                val => val.videoKey === nowPlaying.videoKey
              );
              if (0 === nowIndex) {
                toast.error("이전 항목이 없습니다.");
              } else {
                setNowPlaying(statePlayList[nowIndex - 1]);
              }
            };
            const nextPlay = () => {
              // turn nextMusic
              const nowIndex = statePlayList.findIndex(
                val => val.videoKey === nowPlaying.videoKey
              );
              if (statePlayList.length - 1 === nowIndex) {
                toast.error("다음 항목이 없습니다.");
              } else {
                setNowPlaying(statePlayList[nowIndex + 1]);
              }
            };

            return (
              <Container>
                <PlayerHiddenFrame>{iframe}</PlayerHiddenFrame>
                <DetailPlaying nowPlaying={nowPlaying} />
                <Controller>
                  <DurationStatus>
                    {formatTime(getCurrentTime())} / {formatTime(getDuration())}
                    <DurationBar
                      type="range"
                      min={0}
                      max={100}
                      value={getProcessPer(getCurrentTime(), getDuration())}
                      onChange={e => moveCurrent(e.target.value, getDuration())}
                    />
                  </DurationStatus>

                  <RemotePlayer>
                    <ArrowBtn
                      icon={faChevronCircleLeft}
                      onClick={() => {
                        prevPlay();
                      }}
                    />
                    {isPlaying ? (
                      <PlayPauseBtn
                        icon={faPauseCircle}
                        onClick={event => pauseVideo()}
                      />
                    ) : (
                      <PlayPauseBtn
                        icon={faPlayCircle}
                        onClick={event => playVideo()}
                      />
                    )}
                    <ArrowBtn
                      icon={faChevronCircleRight}
                      onClick={() => {
                        nextPlay();
                      }}
                    />
                  </RemotePlayer>
                </Controller>
              </Container>
            );
          }}
        />
      </LeftFrame>
    </>
  );
};

export default Player;
