import { NavLink } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import "../styles/results.css";
import img from "../assets/notfound.png";

function Results({ data }) {
  console.info(data);
  return (
    <section className="results">
      {data.map((b) => (
        <NavLink className="link" to={`/detailselection/${b.id}`} key={b.id}>
          <div className="card">
            <img
              className="img_src"
              src={
                b.volumeInfo?.imageLinks?.thumbnail
                  ? b.volumeInfo?.imageLinks?.thumbnail
                  : img
              }
              alt={b.volumeInfo.title}
            />
            <h3>{b.volumeInfo.title}</h3>
          </div>
        </NavLink>
      ))}
    </section>
  );
}

Results.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Results;
