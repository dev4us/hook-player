import React from "react";
import styled, { keyframes, css } from "styled-components";

const AlbumItem = styled.div`
  display: flex;
  align-items: center;
  border: 1px dashed black;
  width: 100%;
  height: 100px;
  padding-left: 15px;
`;

const rotate = keyframes`
  25%{
    transform:rotate(90deg);
  }
  50%{
    transform:rotate(180deg);
  }
  75%{
    transform:rotate(270deg);
  }
  100%{
    transform:rotate(360deg);
  }
`;
const AlbumThumbnail = styled.div`
  display: block;
  width: 70px;
  height: 75%;
  border-radius: 100%;
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: bottom;
  ${props =>
    props.nowPlayThumbnail &&
    css`
      animation: ${rotate} 5s linear infinite;
    `};
`;

const Album = ({
  thumbnail,
  movieId,
  statePlayList,
  nowPlaying,
  setNowPlaying
}) => {
  const nowPlayThumbnail = movieId === nowPlaying.videoKey;
  console.log(statePlayList, nowPlaying);

  return (
    <AlbumItem
      onClick={() =>
        setNowPlaying(statePlayList.find(val => val.videoKey === movieId))
      }
    >
      <AlbumThumbnail
        background={thumbnail}
        nowPlayThumbnail={nowPlayThumbnail}
      />
    </AlbumItem>
  );
};

export default Album;
