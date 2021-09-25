import React, { FC, useState } from "react";
import { Cell } from "src/constants/GameStatus";

const GridElement: FC<Cell> = ({ id, hasBomb, activated }) => {
  const [clicked, setClicked] = useState<boolean>(activated);
  return (
    <div
      className={`grid-element ${clicked ? "inset-shadow" : "shadow"}`}
      onClick={() => {
        console.log("BOMBA:", hasBomb, "id:", id);
        setClicked(true);
      }}
    ></div>
  );
};

export default GridElement;
