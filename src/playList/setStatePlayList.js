import { useState } from "react";

export default handlePlayList => {
  const [statePlayList, setStatePlayList] = useState([]);

  return {
    statePlayList,
    addStatePlayList: contentsData => {
      setStatePlayList([...statePlayList, contentsData]);
    },
    deleteStatePlayList: conetentsId => {
      const afterStatePlayList = statePlayList.filter(
        (_, index) => index !== conetentsId
      );
      setStatePlayList(afterStatePlayList);
    }
  };
};
