import React from "react";

import "../styles/cardSelection.css";

import PropTypes from "prop-types";

function CardSelection({ image }) {
  return (
    <div className="Card">
      <div className="cardHeader">
        <img className="image" src={image} alt="description" />
      </div>
    </div>
  );
}

CardSelection.propTypes = {
  image: PropTypes.string.isRequired,
};

export default CardSelection;
