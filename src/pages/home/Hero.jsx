import React from "react";
import { Link } from "react-router-dom";
// import heroImage from "assets/hero-image-1.jpeg";
import "./hero.scss";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__bg">
          <div className="image-block">
            {/* <img src={heroImage} alt="hero banner background" /> */}
          </div>
        </div>
        <div className="hero__text">
          <div className="hero__papper">
            <h1>
              <span>PenCredit</span>
              <span> has insurance, banking and retirement solutions</span>
            </h1>
            <p>
              We serve the military, veterans, and their eligible family
              members, to earn one of the best savings rates in America—plus no
              fees or minimums.
            </p>

            <nav className="hero__nav">
              <Link className="nav-link">Open an Account</Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
