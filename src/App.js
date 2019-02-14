import React from "react";
import styled from "styled-components";

// For handle State
import handleStatePlayList from "./handleState/handleStatePlayList";
import handlePlayer from "./handleState/handlePlayer";

// Components
import InputForm from "./components/InputForm";
import AlbumList from "./components/AlbumList";
import Player from "./components/Player";
import Background from "./components/Background";

const MainFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
  z-index: 2;
`;

const BodyFrame = styled.div`
  display: flex;
  height: 80%;
  width: 70%;
`;

const DetailPlayFrame = styled.div`
  flex: 1;
  height: 100%;
`;
const ControllerPlayFrame = styled.div`
  flex: 1;
  height: 100%;
  border: 1px solid blue;
`;

function App() {
  const { statePlayList, addStatePlayList } = handleStatePlayList();
  const { nowPlaying, setNowPlaying } = handlePlayer(statePlayList[0]);
  return (
    <div className="App">
      <Background backgroundURL={nowPlaying.thumbnail} />
      <MainFrame>
        <BodyFrame>
          <DetailPlayFrame>
            <Player nowPlaying={nowPlaying} />
          </DetailPlayFrame>
          <ControllerPlayFrame>
            <InputForm
              statePlayList={statePlayList}
              addStatePlayList={addStatePlayList}
            />
            <br />
            <AlbumList
              statePlayList={statePlayList}
              setNowPlaying={setNowPlaying}
            />
          </ControllerPlayFrame>
        </BodyFrame>
      </MainFrame>
    </div>
  );
}

export default App;
