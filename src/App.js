import React from "react";
import styled from "styled-components";

// For handle State
import handleStatePlayList from "./handleState/handleStatePlayList";
import handlePlayer from "./handleState/handlePlayer";

// Components
import InputForm from "./components/InputForm";
import AlbumList from "./components/AlbumList";
import Player from "./components/Player";
// import Background from "./components/Background";

const Background = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  background-image: url(${props => props.backgroundURL});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  filter: blur(8px);
  -webkit-filter: blur(8px);
  z-index: 1;
`;

const MainFrame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

function App() {
  const { statePlayList, addStatePlayList } = handleStatePlayList();
  const { nowPlaying, setNowPlaying } = handlePlayer(statePlayList[0]);
  return (
    <div className="App">
      <Background backgroundURL={nowPlaying.thumbnail} />
      <MainFrame>
        <InputForm
          statePlayList={statePlayList}
          addStatePlayList={addStatePlayList}
        />
        <br />
        <Player nowPlaying={nowPlaying} />
        <AlbumList
          statePlayList={statePlayList}
          setNowPlaying={setNowPlaying}
        />
      </MainFrame>
    </div>
  );
}

export default App;
