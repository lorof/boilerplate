import * as React from "react";
import * as ReactDOM from "react-dom";

import "normalize.css/normalize.css";
// import "bootstrap/scss/bootstrap.scss";


import "typeface-roboto";
import { Hello } from "./Hello";


ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);
