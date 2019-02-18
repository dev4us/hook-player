import React from "react";
import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const AlbumItem = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  border-bottom: 1px dashed white;
  width: 100%;
  height: 100px;
  padding-left: 15px;
  cursor: pointer;
  ${props =>
    props.isPlaying &&
    css`
      background: rgba(228, 43, 43, 0.4);
    `};

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
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
  margin-right: 40px;
  ${props =>
    props.isPlaying &&
    css`
      animation: ${rotate} 5s linear infinite;
    `};
  @media (max-width: 500px) {
    width: 55px;
    height: 55px;
    margin-right: 10px;
  }
`;
const SubContainer = styled.div`
  display: block;
  float: right;
  width: 80%;
  height: 100%;
`;

const SubText = styled.div`
  display: flex;
  align-items: center;
  float: left;
  width: 80%;
  height: 100%;
`;
const SubIcon = styled.div`
  display: flex;
  align-items: center;
  float: right;
  width: 20%;
  height: 100%;
`;
const SubSongName = styled.a`
  color: white;
  font-size: 15px;
  font-weight: bold;
`;

const SubDuration = styled.a`
  font-size: 15px;
  color: white;
  margin-left: 5px;
`;

const DeleteBtn = styled(FontAwesomeIcon)`
  position: absolute;
  right: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  color: #8c8c8c;
  &:hover {
    color: white;
  }
`;

const Album = ({
  thumbnail,
  movieId,
  statePlayList,
  nowPlaying,
  setNowPlaying,
  deleteStatePlayList,
  songName,
  singer,
  duration
}) => {
  const isPlaying = movieId === nowPlaying.videoKey;
  const getFullName = () => {
    if (songName !== "" && songName !== undefined) {
      if (songName.length > 30) {
        songName = songName.substring(0, 30) + "...";
      }
      return songName + " - " + singer;
    } else {
      return null;
    }
  };

  return (
    <AlbumItem
      onClick={() =>
        setNowPlaying(statePlayList.find(val => val.videoKey === movieId))
      }
      isPlaying={isPlaying}
    >
      <AlbumThumbnail background={thumbnail} isPlaying={isPlaying} />
      <SubContainer>
        <SubText>
          <SubSongName>{getFullName()}</SubSongName>
          <SubDuration>{`(${duration})`}</SubDuration>
        </SubText>
        <SubIcon>
          <DeleteBtn
            icon={faTrash}
            onClick={e => {
              e.stopPropagation();
              if (deleteStatePlayList(movieId) !== true) {
                toast.error("하나의 항목은 유지하여야 합니다.");
              }
            }}
          />
        </SubIcon>
      </SubContainer>
    </AlbumItem>
  );
};

export default Album;
