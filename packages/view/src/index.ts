import React from "react";
import ReactDOM from "react-dom";

import { App } from "./components/App";

ReactDOM.render(
  React.createElement(App, { data: [tree] }),
  document.querySelector("#root")
);
