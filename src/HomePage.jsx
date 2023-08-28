import React from "react";
import logos from "./assets/cta-logo-one.svg";
import logos2 from "./assets/cta-logo-two.png";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <div className="Home-Page">
        <img className="main-logo" src={logos} alt="premiresLogos" />
        <Link to="/Content">GET ALL THERE</Link>
        <p>
          Get premier acces to Raya and the last dragon for an additional fees
          with a Disney+ subcription. <br />
          As of 03/26/23, the price of Disney+ and The Disney Bundle will
          increase by $1.
        </p>
        <img className="another-logo" src={logos2} alt="anotherLogo" />
      </div>
    </>
  );
};

export default HomePage;
