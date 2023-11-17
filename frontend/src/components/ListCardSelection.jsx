import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CardSelection from "./CardSelection";

import "../styles/cardselection.css";
import "../styles/cardlist.css";

function ListCardSelection() {
  const [google, setGoogle] = useState(null);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=fantastic+inauthor:keyes&maxResults=40&printType=books"
    )
      .then((res) => res.json())
      .then((data) => setGoogle(data));
  }, []);

  return (
    <div>
      <h1>Sélection du mois</h1>
      <div className="masterCardList">
        <div className="cardList">
          {google &&
            google.items.slice(10, 16).map((book) => (
              <Link to={`/DetailSelection/${book.id}`} key={book.id}>
                <CardSelection image={book.volumeInfo?.imageLinks?.thumbnail} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ListCardSelection;
