import "./style.css";
import Dice from "./dice";

export default function Game({ startDice, onChange }) {
  return (
    <div className="game">
      <Dice startDice={startDice} />
      <button className="game__button" onClick={onChange}>
        Бросить кубик
      </button>
    </div>
  );
}
