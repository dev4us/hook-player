import { useState, useEffect } from "react";

const handleStatePlayList = () => {
  const initialPlayList = [
    {
      id: 0,
      songName: "YoungBlood",
      singer: "5 Seconds of Summer",
      videoKey: "nK_OAW47Brw",
      thumbnail: "https://i.ytimg.com/vi/nK_OAW47Brw/maxresdefault.jpg",
      max_thumbnail: "https://i.ytimg.com/vi/nK_OAW47Brw/maxresdefault.jpg",
      duration: "03:25"
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
    deleteStatePlayList: conetentsKey => {
      const afterStatePlayList = statePlayList.filter(
        (val, index) => val.videoKey !== conetentsKey
      );
      setStatePlayList(afterStatePlayList);
    }
  };
};

export default handleStatePlayList;
