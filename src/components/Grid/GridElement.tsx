import React, { FC } from "react";
import { Cell } from "src/constants/GameStatus";
import bomb from "src/img/bomb.svg";
import gold from "src/img/gold.svg";
interface Props extends Cell {
  onClick: (n: number) => void;
}

const GridElement: FC<Props> = ({ id, hasBomb, activated, onClick }) => {
  const handleClick = () => {
    onClick(id);
  };
  return (
    <div
      className={`grid-element ${activated ? "inset-shadow" : "shadow"}`}
      onClick={() => {
        handleClick();
      }}
    >
      {activated && (
        <img
          src={hasBomb ? bomb : gold}
          width="100%"
          height="100%"
          alt={hasBomb ? "bomb" : "gold"}
        />
      )}
    </div>
  );
};

export default GridElement;
