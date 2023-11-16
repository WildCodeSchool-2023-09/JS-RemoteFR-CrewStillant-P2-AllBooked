import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/search.css";

function Search() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const onClick = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`searchresults/${value}`);
    } else {
      navigate("/");
    }
  };

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <section className="recherche">
      <form>
        <input
          id="searchBar"
          type="text"
          placeholder="Recherche un livre"
          value={value}
          onChange={handleChange}
          autoComplete="off"
        />
        <button type="button" className="inputButton" onClick={onClick}>
          Rechercher
        </button>
      </form>
    </section>
  );
}

export default Search;
