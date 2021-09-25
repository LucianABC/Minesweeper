import React, { FC, HTMLAttributes } from "react";
import "./Screen.scss";

const Screen: FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return <div className="screen">{children}</div>;
};

export default Screen;
