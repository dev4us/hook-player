import React from "react";
import handleStatePlayList from "./handleStatePlayList";
import InputForm from "./InputForm";
import PlayerList from "./PlayerList";
 
function App() {
  const { statePlayList, addStatePlayList } = handleStatePlayList();

  return (<div className="App"><InputForm statePlayList={statePlayList} addStatePlayList={addStatePlayList}/><br /><PlayerList statePlayerList={statePlayList}/></div>);
}

export default App;
