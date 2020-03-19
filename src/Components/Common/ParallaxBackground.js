import React, { useState, useEffect } from "react";
import { useSpring, animated, interpolate } from "react-spring";

const backgroundImage = require("../../assets/images/photo.jpg");

function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", debounce(handleScroll));
    return () => window.removeEventListener("scroll", debounce(handleScroll));
  }, [debounce]);

  const [{ springscrollY }, springsetScrollY] = useSpring(() => ({
    springscrollY: 0
  }));
  const parallaxLevel = 0;
  springsetScrollY({ springscrollY: scrollY });
  const interpHeader = springscrollY.interpolate(
    o => `translateY(${o / parallaxLevel}px)`
  );

  return (
    <animated.div style={{ transform: interpHeader }}>
      <div
        style={{
          backgroundImage: `url(../../assets/images/photo.jpg)`,
          width: `100%`
        }}
      ></div>
    </animated.div>
  );
}

function debounce(func, wait = 5, immediate = false) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export default ParallaxBackground;
