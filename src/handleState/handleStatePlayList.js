import { useState, useEffect } from "react";

const handleStatePlayList = () => {
  const initialPlayList = [
    {
      id: 0,
      songName:
        "We Can't Stop - Miley Cyrus (Boyce Avenue feat. Bea Miller cover) on Spotify & Apple",
      singer: "Boyce Avenue",
      videoKey: "uzgp65UnPxA",
      thumbnail: "https://i.ytimg.com/vi/uzgp65UnPxA/maxresdefault.jpg",
      max_thumbnail: "https://i.ytimg.com/vi/uzgp65UnPxA/maxresdefault.jpg",
      duration: "04:30"
    },
    {
      id: 1,
      songName: "Charlie Puth - Attention [Official Video]",
      singer: "Charlie Puth",
      videoKey: "nfs8NYg7yQM",
      thumbnail: "https://i.ytimg.com/vi/nfs8NYg7yQM/hqdefault.jpg",
      max_thumbnail: "https://i.ytimg.com/vi/nfs8NYg7yQM/hqdefault.jpg",
      duration: "03:52"
    },
    {
      id: 2,
      songName: "Pharrell Williams - Happy (Official Music Video)",
      singer: "PharrellWilliamsVEVO",
      videoKey: "ZbZSe6N_BXs",
      thumbnail: "https://i.ytimg.com/vi/ZbZSe6N_BXs/maxresdefault.jpg",
      max_thumbnail: "https://i.ytimg.com/vi/ZbZSe6N_BXs/maxresdefault.jpg",
      duration: "04:01"
    }
  ];

  const getPlayList = localStorage.getItem("localPlayList")
    ? JSON.parse(localStorage.getItem("localPlayList"))
    : initialPlayList;

  const [statePlayList, setStatePlayList] = useState(getPlayList);

  useEffect(() => {
    localStorage.setItem("localPlayList", JSON.stringify(statePlayList));
  });

  return {
    statePlayList,
    addStatePlayList: contentsData => {
      let beforeStateList = statePlayList;
      let nextStateList = beforeStateList.concat(contentsData);
      setStatePlayList(nextStateList);
    },
    deleteStatePlayList: conetentsKey => {
      if (statePlayList.length !== 1) {
        const afterStatePlayList = statePlayList.filter(
          (val, index) => val.videoKey !== conetentsKey
        );
        setStatePlayList(afterStatePlayList);
        return true;
      } else {
        return false;
      }
    }
  };
};

export default handleStatePlayList;
