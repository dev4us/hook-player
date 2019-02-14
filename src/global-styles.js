import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
 ${reset}
  * {
    box-sizing: border-box;
  }
  *:focus{
    outline:none;
  }
  body{
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
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
