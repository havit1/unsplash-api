import GridItem from "./GridItem";
import React from "react";
import { ThemeContext } from "../Context/theme-context";
import "./Grid.scss";

const Grid = ({ images = [] }) => {
  return (
    <ThemeContext.Consumer>
      {({ darkTheme }) => (
        <div className={darkTheme ? "grid dark" : "grid"}>
          {images.map(image => (
            <GridItem key={image.id} image={image} />
          ))}
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Grid;
