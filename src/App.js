import "./App.css";
import rock from "./assests/images/rock.png";
import paper from "./assests/images/paper.png";
import scissors from "./assests/images/scissors.png";
import { useState } from "react";
import getRandomNumber from "./util/getRandomNumber.util";

function App() {
  const [choice, setChoice] = useState("");
  const [aiChoice, setAiChoice] = useState("");
  const [score, setScore] = useState("");
  const [history, setHistory] = useState({
    win: 0,
    lose: 0,
    draw: 0,
  });

  const ai = ["rock", "paper", "scissors"];

   const check = (choice, aiChoice) => {
    let result;
    if (choice && choice === aiChoice) {
      result = "draw";
    } else if (choice && choice === "rock") {
      result = aiChoice === "scissors" ? "win" : "lose";
    } else if (choice && choice === "paper") {
      result = aiChoice === "rock" ? "win" : "lose";
    } else if (choice && choice === "scissors") {
      result = aiChoice === "paper" ? "win" : "lose";
    }
    setScore(result);
    setHistory((prevState) => ({
      ...prevState,
      [result]: prevState[result] + 1,
    }));
  };

  const handleClick = (choice) => {
    setChoice(choice);
    let randomIndex = getRandomNumber(0, ai.length - 1);
    setAiChoice(ai[randomIndex]);
    check(choice, ai[randomIndex]);
  };

  return (
    <div className="App">
      <div className="choose">
        <div>
          <img src={rock} alt="rock" onClick={() => handleClick("rock")}></img>
          <p>Rock</p>
        </div>
        <div>
          <img
            src={paper}
            alt="paper"
            onClick={() => handleClick("paper")}
          ></img>
          <p>Paper</p>
        </div>
        <div>
          <img
            src={scissors}
            alt="scissors"
            onClick={() => handleClick("scissors")}
          ></img>
          <p>Scissors</p>
        </div>
      </div>
      <div className="board">
        <img
          className="player"
          src={
            choice === "rock"
              ? rock
              : choice === "paper"
              ? paper
              : choice === "scissors"
              ? scissors
              : ""
          }
          alt={choice}
        />
        <p>{score}</p>
        <img
          className="ai"
          src={
            aiChoice === "rock"
              ? rock
              : aiChoice === "paper"
              ? paper
              : aiChoice === "scissors"
              ? scissors
              : ""
          }
          alt={aiChoice}
        />
      </div>
      <div className="gameHistory">
        <p>Win {history.win}</p>
        <p>Lose {history.lose}</p>
        <p>Draw {history.draw}</p>
      </div>
    </div>
  );
}

export default App;
