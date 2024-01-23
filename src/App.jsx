import Game from "./components/game";
import dice1 from "../public/image/dice1.png";
import dice2 from "../public/image/dice2.png";
import dice3 from "../public/image/dice3.png";
import dice4 from "../public/image/dice4.png";
import dice5 from "../public/image/dice5.png";
import dice6 from "../public/image/dice6.png";
import { useState } from "react";

const DICE = [dice1, dice2, dice3, dice4, dice5, dice6];

const App = () => {
  const [resultDice, setResultDice] = useState(0);
  function getRandDice(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }
  return (
    <Game
      startDice={getRandDice(DICE)}
      onChange={() => setResultDice(resultDice + 1)}
    />
  );
};

export default App;
