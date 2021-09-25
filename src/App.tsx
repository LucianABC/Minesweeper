import React from "react";
import { Minesweeper } from "./components";
import { GAME_MODE } from "./constants/GameStatus";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1> Mi fantabuloso buscaminas </h1>
      </header>
      <section className="main">
        <Minesweeper gameMode={GAME_MODE.EASY} />
      </section>
    </div>
  );
}

export default App;
