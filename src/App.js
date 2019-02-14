import React from "react";
import handleStatePlayList from "./handleStatePlayList";
import InputForm from "./InputForm";
import AlbumList from "./AlbumList";
import handlePlayer from "./handlePlayer";
import Player from "./Player";

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
