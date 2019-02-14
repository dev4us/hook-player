import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=PT+Sans:400,700');
 ${reset}
  * {
    box-sizing: border-box;
  }
  *:focus{
    outline:none;
  }
  body{
    font-family: 'PT Sans', sans-serif, -apple-system,system-ui,BlinkMacSystemFont;
    font-weight:400;
  }
  a{
    color:inherit;
    text-decoration:none;
  }
  input,
  button{
    &.focus,
    &.active{outline:none}
  }
  h1,h2,h3,h4,h5,h6{
    font-family:'Maven Pro', sans-serif;
  }
`;

export default GlobalStyle;
