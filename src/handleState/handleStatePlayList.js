import { useState, useEffect } from "react";

const handleStatePlayList = () => {
  const initialPlayList = [
    {
      id: 0,
      songName: "YoungBlood",
      singer: "5 Seconds of Summer",
      videoKey: "CXNv4_wQjKQ",
      thumbnail: "https://i.ytimg.com/vi/CXNv4_wQjKQ/mqdefault.jpg",
      max_thumbnail: "https://i.ytimg.com/vi/CXNv4_wQjKQ/maxresdefault.jpg"
    }
  ];

  const getPlayList = localStorage.getItem("localPlayList")
    ? JSON.parse(localStorage.getItem("localPlayList"))
    : initialPlayList;

  const [statePlayList, setStatePlayList] = useState(getPlayList);

  useEffect(() => {
    localStorage.setItem("localPlayList", JSON.stringify(statePlayList));
    console.log(statePlayList);
  });

  return {
    statePlayList,
    addStatePlayList: contentsData => {
      let beforeStateList = statePlayList;
      let nextStateList = beforeStateList.concat(contentsData);
      setStatePlayList(nextStateList);
    },
    deleteStatePlayList: conetentsId => {
      const afterStatePlayList = statePlayList.filter(
        (_, index) => index !== conetentsId
      );
      setStatePlayList(afterStatePlayList);
    }
  };
};

export default handleStatePlayList;
