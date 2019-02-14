import React from "react";
import styled from "styled-components";

const Component = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  background-image: url(${props => props.backgroundURL});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  filter: blur(8px) opacity(0.8);
  -webkit-filter: blur(8px) opacity(0.8);
  z-index: 1;
`;

const Background = ({ backgroundURL }) => {
  return <Component backgroundURL={backgroundURL} />;
};

export default Background;
