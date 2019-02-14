import React, { useState } from "react";
import axios from "axios";

const InputForm = ({ statePlayList, addStatePlayList }) => {
  const [url, setUrl] = useState("");

  const getMovieData = async () => {
    const fullUrl = url;
    let video_id = "";

    if (fullUrl.includes("v=") === false) {
      video_id = fullUrl;
    } else {
      video_id = fullUrl.split("v=")[1];
      let ampersandPosition = video_id.indexOf("&");

      if (ampersandPosition !== -1) {
        video_id = video_id.substring(0, ampersandPosition);
      }
    }

    const API_KEY = "AIzaSyCC2pMVczqa5crA9qxUFnceNC_0p2gV7gg";
    const API_URL = `https://www.googleapis.com/youtube/v3/videos?id=${video_id}&key=${API_KEY}&part=snippet,contentDetails,statistics,status`;
    const res = await axios.get(API_URL);
    console.log(res);
    if (res.status === 200 && res.data.items.length >= 1) {
      const returnData = [
        {
          id: statePlayList.length || 0,
          songName: res.data.items[0].snippet.title,
          singer: res.data.items[0].snippet.channelTitle,
          videoKey: res.data.items[0].id,
          thumbnail: res.data.items[0].snippet.thumbnails.high.url
        }
      ];
      addStatePlayList(returnData);
    } else {
      alert("존재하지 않는 주소입니다");
    }
  };

  return (
    <>
      <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
      <button onClick={() => getMovieData()}>add this url</button>
    </>
  );
};

export default InputForm;
