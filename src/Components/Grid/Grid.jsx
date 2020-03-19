import React, { useState, useEffect } from "react";
import { ThemeContext } from "../Context/theme-context";
import { withRouter } from "react-router-dom";
import PhotoPage from "../PhotoPage/PhotoPage";
import "./Grid.scss";

const GridItem = React.lazy(() => import("./GridItem"));

const Grid = ({ images = [] }) => {
  return (
    <>
      <ThemeContext.Consumer>
        {({ darkTheme }) => (
          <div className={darkTheme ? "grid dark" : "grid"}>
            {images.map(image => (
              <React.Suspense key={image.id} fallback={<div>LOADING</div>}>
                <GridItem key={image.id} image={image} />
              </React.Suspense>
            ))}
          </div>
        )}
      </ThemeContext.Consumer>
    </>
  );
};

export default withRouter(Grid);
