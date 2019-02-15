import React from "react";
import styled from "styled-components";
import Album from "./Album";

const AlbumContainer = styled.div`
  flex: 1;
  height: 100%;
  overflow-y: scroll;
`;

const AlbumList = ({ statePlayList, nowPlaying, setNowPlaying }) => {
  return (
    <AlbumContainer>
      {statePlayList.map((data, index) => (
        <Album
          key={index.toString()}
          thumbnail={data.thumbnail}
          movieId={data.videoKey}
          nowPlaying={nowPlaying}
          setNowPlaying={setNowPlaying}
          statePlayList={statePlayList}
        />
      ))}
    </AlbumContainer>
  );
};

export default AlbumList;
