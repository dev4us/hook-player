import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const PlayingThumbnail = styled.img`
  width: 85%;
  height: 70%;
  -webkit-box-shadow: 0 15px 14px rgba(0, 0, 0, 0.5),
    0 25px 25px rgba(0, 0, 0, 0.075);
  box-shadow: 0 15px 14px rgba(0, 0, 0, 0.5), 0 25px 25px rgba(0, 0, 0, 0.075);
`;

const SongTitle = styled.p`
  margin-top: 1.3rem;
  color: white;
  font-size: 1.2rem;
  letter-spacing: 1px;
`;

const SingerTitle = styled.p`
  margin-top: 0.5rem;
  color: #cbcbcb;
  font-size: 1rem;
`;

const DetailPlaying = ({ nowPlaying }) => {
  const { max_thumbnail, songName, singer } = nowPlaying;
  let afterSongName = "";

  const getSongName = () => {
    if (songName !== "" && songName !== undefined) {
      if (songName.length > 30) {
        afterSongName = songName.substring(0, 30) + "...";
      }
      return afterSongName;
    } else {
      return null;
    }
  };
  return (
    <Container>
      <PlayingThumbnail src={max_thumbnail} alt="DetailPlayingThumbnail" />
      <SongTitle>{getSongName()}</SongTitle>
      <SingerTitle>{singer}</SingerTitle>
    </Container>
  );
};

export default DetailPlaying;
