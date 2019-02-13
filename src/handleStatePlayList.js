import { useState, useEffect } from "react";

const handleStatePlayList = () => {
  const initialPlayList = 
    {
      id: 0,
      songName: "YoungBlood",
      singer: "5 Seconds of Summer",
      videoKey: "CXNv4_wQjKQ",
      thumbnail: "https://i.ytimg.com/vi/CXNv4_wQjKQ/mqdefault.jpg"
    }
  ;
  
  const getPlayList =
    localStorage.getItem('localPlayList') ?
    JSON.parse(localStorage.getItem('localPlayList')) : initialPlayList;
  
  const [statePlayList, setStatePlayList] = useState([getPlayList]);

  useEffect(() => {
    localStorage.setItem('localPlayList', JSON.stringify(statePlayList));
    console.log(statePlayList);
    },
    [statePlayList]
  )

  return {
    statePlayList,
    addStatePlayList: contentsData => {
      const beforeStateList = statePlayList;
      const nextStateList = beforeStateList.concat(contentsData);
      setStatePlayList([{...nextStateList}]);
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