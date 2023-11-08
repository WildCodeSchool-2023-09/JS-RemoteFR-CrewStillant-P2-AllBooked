import { useState, useEffect } from "react";
import CardSelection from "./CardSelection";
import "./cardSelection.css";
import "./cardList.css";

function ListCardSelection() {
  const [google, setGoogle] = useState(null);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=fantastic+inauthor:keyes&maxResults=40&printType=books&key=AIzaSyCRqS28SI90ab1CXYQ0DUmXdL_P_vRGVEM"
    )
      .then((res) => res.json())
      .then((data) => setGoogle(data));
  }, []);

  return (
    <>
      <div>
        <h1>Sélection du mois</h1>
      </div>
      <div className="masterCardList">
        <div className="cardList">
          {google &&
            google.items
              .slice(10, 18)
              .map((f) => (
                <CardSelection
                  key={f.id}
                  image={f.volumeInfo?.imageLinks?.thumbnail}
                />
              ))}
        </div>
      </div>
    </>
  );
}

export default ListCardSelection;
