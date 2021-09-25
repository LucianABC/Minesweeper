import React, { FC, useEffect, useState, useRef } from "react";
import { Grid, Screen } from "../";
import "./Minesweeper.scss";
import { STATUS, GAME_MODE, Cell } from "src/constants/GameStatus";
import { initializeGame } from "src/utils";

interface Props {
  gameMode: GAME_MODE;
}
const Minesweeper: FC<Props> = ({ gameMode }) => {
  const [points, setPoints] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  const [status, setStatus] = useState<STATUS>(STATUS.GAME_ACTIVE);
  const [cells, setCells] = useState<Cell[]>([]);

  const interval = useRef<any>(null);

  useEffect(() => {
    start();
  }, [gameMode]);

  useEffect(() => {
    if (status !== STATUS.GAME_ACTIVE) {
      clearInterval(interval.current);
    }
  }, [status]);

  useEffect(() => {
    if (points === 50) setStatus(STATUS.GAME_WON);
  }, [points]);

  const start = () => {
    setPoints(0);
    setStatus(STATUS.GAME_ACTIVE);
    setCells(initializeGame(gameMode));
    setTimer(0);
    interval.current = setInterval(handleTimer, 1000);
  };

  const handleTimer = () => {
    setTimer((timer) => timer + 1);
  };

  const handleClick = (id: number) => {
    if (status === STATUS.GAME_ACTIVE) {
      let modifiedCells = [...cells];
      modifiedCells[id] = { ...modifiedCells[id], activated: true };
      setCells(modifiedCells);
      if (modifiedCells[id].hasBomb) setStatus(STATUS.GAME_LOST);
      else setPoints((points) => points + 10);
    }
  };

  return (
    <div className="container">
      <header className="inset-shadow">
        <Screen>{points}</Screen>
        <button onClick={start} className={`restart shadow ${status}`}></button>
        <Screen>{timer}</Screen>
      </header>
      <Grid
        className="inset-shadow"
        cells={cells}
        handleClick={handleClick}
      ></Grid>
    </div>
  );
};

export default Minesweeper;
