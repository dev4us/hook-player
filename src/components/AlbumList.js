import React from "react";
import styled from "styled-components";
import Album from "./Album";

const AlbumContainer = styled.div`
  flex: 1;
  height: 100%;
  overflow-y: scroll;
  margin-top: 10%;
`;

const AlbumList = ({
  statePlayList,
  nowPlaying,
  setNowPlaying,
  deleteStatePlayList
}) => {
  return (
    <AlbumContainer>
      {statePlayList.map((data, index) => (
        <Album
          key={index.toString()}
          thumbnail={data.thumbnail}
          movieId={data.videoKey}
          songName={data.songName}
          singer={data.singer}
          duration={data.duration}
          nowPlaying={nowPlaying}
          setNowPlaying={setNowPlaying}
          statePlayList={statePlayList}
          deleteStatePlayList={deleteStatePlayList}
        />
      ))}
    </AlbumContainer>
  );
};

export default AlbumList;
