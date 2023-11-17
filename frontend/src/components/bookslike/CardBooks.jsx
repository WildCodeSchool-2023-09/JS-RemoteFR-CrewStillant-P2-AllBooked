// PropTypes

import PropTypes from "prop-types";

// styles

import "../../styles/cardbooks.css";

// my function

function CardBooks({ image, title }) {
  return (
    <div className="card">
      <img className="image1" src={image} alt="" />
      <h2>{title}</h2>
    </div>
  );
}

CardBooks.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CardBooks;
