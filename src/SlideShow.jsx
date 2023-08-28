import React from "react";
import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpg";
import slide4 from "./assets/slide4.jpg";
import { Fade } from "react-slideshow-image";

const images = [slide1, slide2, slide3, slide4];

const SlideShow = () => {
  return (
    <>
      <div className="slide-container">
        <Fade>
          {images.map((each, index) => (
            <div key={index} className="each-fade">
              <img src={each} alt={`Slide ${index}`} />
            </div>
          ))}
        </Fade>
      </div>
    </>
  );
};

export default SlideShow;
