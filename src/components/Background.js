import React from "react";
import styled from "styled-components";

const BlurImg = styled.div`
  position:absolute;
  background: gray;
  width:100vw
  height:100vh;
  opacity:0.5;
  
`;

const Background = () => {
  return <BlurImg />;
};

export default Background;
