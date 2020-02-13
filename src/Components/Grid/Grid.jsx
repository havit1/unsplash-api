import "./Grid.scss";
import GridItem from "./GridItem";
import React from "react";

const Grid = ({ images = [] }) => {
  return (
    <div className="grid">
      {images.map(image => (
        <GridItem key={image.id} image={image} />
      ))}
    </div>
  );
};

export default Grid;
