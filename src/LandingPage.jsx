import React from "react";
import LPMain from "./LPMain";
import "react-slideshow-image/dist/styles.css";
import SlideShow from "./SlideShow";
import scalePic1 from "./assets/scale1.jpg";
import scalePic2 from "./assets/scale2.jpg";
import scalePic3 from "./assets/scale3.jpg";
import scalePic4 from "./assets/scale4.jpg";
import scalePic5 from "./assets/scale5.jpg";

const Content = () => {
  return (
    <>
      <SlideShow />
      <div className="main-container">
        <div className="container-1">
          <img src={scalePic1} alt="pic1" />
        </div>
        <div className="container-2">
          <img src={scalePic2} alt="" />
        </div>
        <div className="container-3">
          <img src={scalePic3} alt="" />
        </div>
        <div className="container-4">
          <img src={scalePic4} alt="" />
        </div>
        <div className="container-5">
          <img src={scalePic5} alt="" />
        </div>
      </div>
      <LPMain />
    </>
  );
};

export default Content;
