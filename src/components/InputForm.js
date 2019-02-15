import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ytDurationFormat from "youtube-duration-format";

const Container = styled.div`
  display: flex;
  align-items: baseline;
  width: 100%;
  height: 5%;
  margin-top: 3%;
`;

const Subscription = styled.span`
  width: 15%;
  margin-left: 2%;
  margin-right: 2%;
  font-size: 1rem;
  font-weight: bold;
  color: #ececec;
`;

const SearchBtnHover = keyframes`
  100%{
    background:rgba(255, 255, 255, 0.5);
    box-shadow:none;
  }
`;

const SearchBtnFrame = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 10%;
  height: 40px;
  border: 2px solid white;
  border-radius: 10px;

  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12),
    0 3px 6px rgba(0, 0, 0, 0.1725);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.1725);

  &:hover {
    animation: ${SearchBtnHover} 0.1s ease;
    animation-fill-mode: forwards;
  }
`;

const SearchBtn = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  cursor: pointer;
  color: #dcdcdc;
`;

const SearchInput = styled.input`
  background: none;
  width: 70%;
  height: 100%;
  color: #ececec;
  border: none;
  border-bottom: 2px solid #ececec;
`;

const InputForm = ({ statePlayList, addStatePlayList }) => {
  const [inputUrl, setUrl] = useState("");

  const getMovieData = async () => {
    if (!inputUrl) {
      alert("hey!");
      return false;
    }

    const fullUrl = inputUrl;
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
      const highestThumbnail = () => {
        let returnData = "";

        if (res.data.items[0].snippet.thumbnails.maxres) {
          returnData = res.data.items[0].snippet.thumbnails.maxres.url;
        } else if (res.data.items[0].snippet.thumbnails.high) {
          returnData = res.data.items[0].snippet.thumbnails.high.url;
        } else if (res.data.items[0].snippet.thumbnails.medium) {
          returnData = res.data.items[0].snippet.thumbnails.medium.url;
        }
        return returnData;
      };
      const returnData = [
        {
          id: statePlayList.length || 0,
          songName: res.data.items[0].snippet.title,
          singer: res.data.items[0].snippet.channelTitle,
          videoKey: res.data.items[0].id,
          thumbnail: highestThumbnail(),
          max_thumbnail: highestThumbnail(),
          duration: ytDurationFormat(res.data.items[0].contentDetails.duration)
        }
      ];
      addStatePlayList(returnData);
    } else {
      alert("존재하지 않는 주소입니다");
    }
  };

  return (
    <Container>
      <Subscription>Youtube Link:</Subscription>
      <SearchInput
        value={inputUrl}
        onChange={e => setUrl(e.target.value)}
        placeholder={`Insert Youtube URL or videoId`}
      />
      <SearchBtnFrame onClick={() => getMovieData()}>
        <SearchBtn icon={faPlus} />
      </SearchBtnFrame>
    </Container>
  );
};

export default InputForm;
