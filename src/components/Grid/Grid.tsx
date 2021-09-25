import React, { FC, HTMLAttributes, useEffect, useState } from "react";
import "./Grid.scss";
import GridElement from "./GridElement";
import { GAME_MODE, ROWS_AND_COLS, Cell } from "src/constants/GameStatus";
import { createCells, plantBombs, generateBombIds } from "src/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  gameMode: GAME_MODE;
}

const Grid: FC<Props> = ({ gameMode }) => {
  const [cells, setCells] = useState<Cell[]>([]);

  useEffect(() => {
    setCells(initializeGame());
  }, [gameMode]);

  const initializeGame = () => {
    const emptyCells = createCells(gameMode);
    const bombIds = generateBombIds(
      ROWS_AND_COLS[gameMode].mines,
      emptyCells.length
    );
    const cells = plantBombs(emptyCells, bombIds);
    return cells;
  };

  const renderGridElements = () => {
    const gridElements = [];
    for (let cell of cells) {
      gridElements.push(<GridElement {...cell}></GridElement>);
    }
    return gridElements;
  };

  return <div className={`grid inset-shadow`}>{renderGridElements()}</div>;
};

export default Grid;
