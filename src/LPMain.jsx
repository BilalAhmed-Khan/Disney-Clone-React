import React from "react";
import "./App.css";
import recc1 from "./assets/recc1.jpg";
import recc2 from "./assets/recc2.jpg";
import recc3 from "./assets/recc3.jpg";
import recc4 from "./assets/recc4.jpg";
import recc5 from "./assets/recc5.jpg";
import recc6 from "./assets/recc6.jpg";
import recc7 from "./assets/recc7.jpg";
import recc8 from "./assets/recc8.jpg";
import recc9 from "./assets/recc9.jpg";
import recc10 from "./assets/recc10.jpg";
import recc11 from "./assets/recc11.jpg";
import recc12 from "./assets/recc12.jpg";
import recc13 from "./assets/recc13.jpg";
import recc14 from "./assets/recc14.jpg";
import recc15 from "./assets/recc15.jpg";
import recc16 from "./assets/recc16.jpg";

const LPMain = () => {
  return (
    <>
      <p>Recommended for you</p>
      <div className="rec-container">
        <div className="rec-container-1">
          <img src={recc1} alt="" />
        </div>
        <div className="rec-container-2">
          <img src={recc2} alt="" />
        </div>
        <div className="rec-container-3">
          <img src={recc3} alt="" />
        </div>
        <div className="rec-container-4">
          <img src={recc4} alt="" />
        </div>
      </div>

      <div className="bg-dark-container">
        <p>New to Disney+</p>
        <div className="new-rec">
          <div className="new-rec-1">
            <img src={recc5} alt="" />
          </div>
          <div className="new-rec-2">
            <img src={recc6} alt="" />
          </div>
          <div className="new-rec-3">
            <img src={recc7} alt="" />
          </div>
          <div className="new-rec-4">
            <img src={recc8} alt="" />
          </div>
        </div>
        <p>Originals</p>
        <div className="new-rec">
          <div className="new-rec-5">
            <img src={recc9} alt="" />
          </div>
          <div className="new-rec-6">
            <img src={recc10} alt="" />
          </div>
          <div className="new-rec-7">
            <img src={recc11} alt="" />
          </div>
          <div className="new-rec-8">
            <img src={recc12} alt="" />
          </div>
        </div>
        <p>Trending</p>
        <div className="new-rec">
          <div className="new-rec-5">
            <img src={recc13} alt="" />
          </div>
          <div className="new-rec-6">
            <img src={recc14} alt="" />
          </div>
          <div className="new-rec-7">
            <img src={recc15} alt="" />
          </div>
          <div className="new-rec-8">
            <img src={recc16} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LPMain;
