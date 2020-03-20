import React, { useEffect } from "react";

const AboutPage = () => {

  useEffect(() => {
    document.title = "About"
  }
  )

  return <div>About</div>;
};

export default AboutPage;
