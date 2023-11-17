import { useNavigate } from "react-router-dom";
import "../styles/searchBar.css";
import { useState } from "react";

function SearchBar() {
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
    <div className="form-all">
      <form className="form">
        <input
          type="search"
          id="searchBar"
          name="search"
          value={value}
          onChange={handleChange}
          placeholder="Rechercher un livre..."
        />
        <button type="button" onClick={onClick}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
