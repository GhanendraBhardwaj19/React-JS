import React from "react";
import "./App.css";
import { sum, sub, mul, div } from "./calc";
const App = () => {
  return (
    <div>
      <ul>
        <li>The sum of two nums:{sum(4, 5)} </li>
        <li>The sub of two nums: {sub(4, 5)}</li>
        <li>The mul of two nums:{mul(4, 5)} </li>
        <li>The div of two nums:{div(4, 5)} </li>
      </ul>
    </div>
  );
};

export default App;
