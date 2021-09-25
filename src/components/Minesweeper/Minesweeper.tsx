import React, { FC } from "react";
import { Grid, Screen } from "../";
import "./Minesweeper.scss";

const Minesweeper: FC = () => {
  return (
    <div className="container">
      <header>
        <Screen>olas</Screen>
        <div>smiley face</div>
        <Screen>chaus</Screen>
      </header>
      <Grid></Grid>
    </div>
  );
};

export default Minesweeper;
