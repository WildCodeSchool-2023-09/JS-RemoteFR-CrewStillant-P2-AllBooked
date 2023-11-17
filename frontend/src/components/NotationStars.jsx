import React, { useState } from "react";
import "../styles/starsNotation.css";

const MAX_RATING = 5;

function NotationStars() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index) => {
    setRating(index);
  };
  const handleKeyPress = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      handleClick(index);
    }
  };

  const renderStar = (index) => {
    const filled = hoverRating >= index || (!hoverRating && rating >= index);
    return (
      <span
        className={`star ${filled ? "filled" : ""}`}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(index)}
        onKeyPress={(event) => handleKeyPress(event, index)}
        role="button"
        tabIndex={0}
        aria-pressed={filled}
      >
        {filled ? "★" : "☆"}
      </span>
    );
  };

  return (
    <div>
      {Array.from({ length: MAX_RATING }, (_, index) => index + 1).map(
        (index) => renderStar(index)
      )}
    </div>
  );
}

export default NotationStars;
