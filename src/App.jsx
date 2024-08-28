import Players from "./components/players";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Players initialPlayerName="Player 1" symbol="X" />
          <Players initialPlayerName="Player 2" symbol="O" />
        </ol>
      </div>
    </main>
  );
}

export default App;
