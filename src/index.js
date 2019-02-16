import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./global-styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

ReactDOM.render(
  <>
    <App />
    <GlobalStyle />
    <ToastContainer draggable={true} position={"bottom-center"} />
  </>,
  document.getElementById("root")
);
