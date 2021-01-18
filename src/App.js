import logo from "./logo.svg";
import "./App.scss";
import { useState } from "react";
import wodDice from "./utilities/wod";

function App() {
  const [textArea, setTextArea] = useState("");
  const [dice, setDice] = useState(1);
  const [again, setAgain] = useState(10);
  const [bonus, setBonus] = useState(0);

  const [stopAll, setStopAll] = useState(true);

  const roll = () => {
    setTextArea(wodDice(dice, again, bonus));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div
          className={`App-logo-wrapper ${stopAll ? "stop" : ""}`}
          onClick={() => setStopAll(!stopAll)}
        >
          <img
            src={logo}
            className={`App-logo ${stopAll ? "stop" : ""}`}
            alt="logo"
          />
        </div>
        <div className="main-area">
          <div className="top-half">
            <div className="field input">
              <label htmlFor="dice">Number of Dice</label>
              <input
                id="dice"
                type="number"
                onChange={({ target: { value } }) => setDice(value)}
                value={dice}
              />
            </div>
            <div className="field select">
              <label htmlFor="again"># again</label>
              <select
                id="again"
                onChange={({ target: { value } }) => setAgain(value)}
                value={again}
              >
                <option value={10}>10</option>
                <option value={9}>9</option>
                <option value={8}>8</option>
                <option value={11}>Off</option>
              </select>
            </div>
            <div className="field input">
              <label htmlFor="bonus">Bonus Successes</label>
              <input
                id="bonus"
                type="number"
                onChange={({ target: { value } }) => setBonus(value)}
                value={bonus}
              />
            </div>
            <button className="hexagon" onClick={roll}>
              Roll
            </button>
          </div>
          <div className="botton-half">
            <textarea value={textArea} readOnly />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
