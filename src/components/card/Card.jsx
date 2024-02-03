import React from "react";
import "./card.scss";

const Card = ({ hasBorderBottom, backgroundImage, cardBackgroundColor, children }) => {

    const cardStyle = {
        backgroundImage: `url(${backgroundImage})`,
      };

      const cardBodyStyle = {
        backgroundColor: cardBackgroundColor,
      };


    
  return (
    <div
      className={`${hasBorderBottom ? "card has-border-btm" : "card"}`} style={cardStyle}>
      <div className="card-overlay-color" style={cardBodyStyle}>
      <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default Card;
