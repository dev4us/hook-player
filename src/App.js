import React from "react";

// For handle State
import handleStatePlayList from "./handleState/handleStatePlayList";
import handlePlayer from "./handleState/handlePlayer";

// Components
import InputForm from "./components/InputForm";
import AlbumList from "./components/AlbumList";
import Player from "./components/Player";

function App() {
  const { statePlayList, addStatePlayList } = handleStatePlayList();
  const { movieUrl, setMovieUrl } = handlePlayer(statePlayList[0].videoKey);
  return (
    <div className="App">
      <InputForm
        statePlayList={statePlayList}
        addStatePlayList={addStatePlayList}
      />
      <br />
      <Player movieUrl={movieUrl} />
      <AlbumList statePlayList={statePlayList} setMovieUrl={setMovieUrl} />
    </div>
  );
}

export default App;
