const initLocalPlayList = () => {
  let isInit = localStorage.getItem("isInit");

  if (!isInit) {
    const statePlayList = [
      {
        id: 0,
        songName: "YoungBlood",
        singer: "5 Seconds of Summer",
        videoKey: "CXNv4_wQjKQ",
        thumbnail: "https://i.ytimg.com/vi/CXNv4_wQjKQ/mqdefault.jpg"
      }
    ];
    const plainPlayList = JSON.stringify(statePlayList);
    localStorage.setItem("localPlaylist", plainPlayList);
    localStorage.setItem("isInit", true);

    return statePlayList;
  } else {
    let plainPlayList = localStorage.getItem("localPlaylist");
    let localPlayList = JSON.parse(plainPlayList);
    return localPlayList;
  }
};

export default initLocalPlayList;
