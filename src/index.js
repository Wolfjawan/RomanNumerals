import React from "react";
import ReactDOM from "react-dom";
import RomanNumerals from "./component/index";

import "./styles.css";

function App() {
  return <RomanNumerals />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
