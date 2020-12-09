import React from "react";
import ReactDOM from "react-dom";
import Root from "./component/root"
import configureStore from "./component/root"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome To BetterCraft</h1>, root);
});