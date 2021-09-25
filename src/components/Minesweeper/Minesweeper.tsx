import React, { FC, useState } from "react";
import { Grid, Screen } from "../";
import "./Minesweeper.scss";
import { STATUS, GAME_MODE } from "src/constants/GameStatus";

const Minesweeper: FC = () => {
  const [points, setPoints] = useState<number>(700);
  const [status, setStatus] = useState<STATUS>(STATUS.GAME_ACTIVE);

  const restart = () => {
    console.log("Game restarted");
    setPoints(0);
    setStatus(STATUS.GAME_ACTIVE);
    return;
  };

  return (
    <div className="container">
      <header className="inset-shadow">
        <Screen>{points}</Screen>
        <button
          onClick={restart}
          className={`restart shadow ${status}`}
        ></button>
        <Screen>420</Screen>
      </header>
      <Grid className="inset-shadow" gameMode={GAME_MODE.EASY}></Grid>
    </div>
  );
};

export default Minesweeper;
