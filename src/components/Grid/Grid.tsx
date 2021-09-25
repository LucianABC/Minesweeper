import React, { FC, HTMLAttributes } from "react";
import "./Grid.scss";
import GridElement from "./GridElement";
import { Cell } from "src/constants/GameStatus";

interface Props extends HTMLAttributes<HTMLDivElement> {
  cells: Cell[];
  handleClick: (n: number) => void;
}

const Grid: FC<Props> = ({ cells, handleClick }) => {
  const renderGridElements = () => {
    const gridElements = [];
    for (let cell of cells) {
      gridElements.push(
        <GridElement {...cell} onClick={handleClick}></GridElement>
      );
    }
    return gridElements;
  };

  return <div className={`grid inset-shadow`}>{renderGridElements()}</div>;
};

export default Grid;
