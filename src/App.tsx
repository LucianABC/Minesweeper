import React from "react";
import "./App.scss";
import { Minesweeper } from "./components";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1> Mi fantabuloso buscaminas </h1>
      </header>
      <section className="main">
        <Minesweeper />
      </section>
    </div>
  );
}

export default App;
