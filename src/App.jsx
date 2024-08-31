import Players from "./components/players";
import GameBoard from "./components/gameBoard";
import Log from "./components/log";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  function handlePlayerChange(rowIndex, colIndex) {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";
      q;
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurns = [
        { row: rowIndex, col: colIndex, player: currentPlayer },
        ...prevTurns,
      ];
      console.log(
        updatedTurns,
        "updatedTurns",
        rowIndex,
        "rowIndex",
        colIndex,
        "colINdex",
        currentPlayer,
        "currectPlayer",
        ...prevTurns,
        "prevTruns"
      );
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players
            initialPlayerName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Players
            initialPlayerName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard activePlayerChange={handlePlayerChange} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
