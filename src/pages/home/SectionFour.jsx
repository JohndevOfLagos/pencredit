import React from "react";
import "./SectionFour.scss";
import laptop from "../../assets/laptop.jpg";
import smilingOnMobile from "../../assets/smiling-on-mobile.jpg";
import arrowRight from "../../assets/arrow-right.svg";
import { Link } from "react-router-dom";
export const SectionFour = () => {
  return (
    <div className="grid-container">
      <div className="image-card">
        <img className="image-image" src={laptop} alt="" />
      </div>
      <div className="image-card">
        <div className="image-card-container">
          <h5 className="Title-text">DEALS FOR SHOPPERS</h5>
          <h4 className="Discription-text">
            Automatically get better deals when you shop online
          </h4>
          <p>
            PenCredit Shopping is a free tool that instantly searches for
            savings and applies them to your cart.
          </p>
          <div className="External-link">
            <Link className="External-link-text" to="/">
              Add Pencredit One Shopping
              <img src={arrowRight} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="image-card">
        <div className="image-card-container-2">
          <h5 className="Title-text">FINANCIAL WELLNESS</h5>
          <h4 className="Discription-text">
            Helping you make smart financial choices
          </h4>
          <p>
            Get help building your credit score and financial future with our
            free app.
          </p>
          <div className="External-link">
            <Link className="External-link-text" to="/">
              Get started
              <img src={arrowRight} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="image-card">
        <img className="image-image" src={smilingOnMobile} alt="" />
      </div>
    </div>
  );
};
