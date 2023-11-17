import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/detailPage.css";
import NotationStars from "../components/NotationStars";

function DetailSelection() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookData = () => {
      fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
        .then((response) => response.json()) // On convertit la réponse en JSON.
        .then((data) => setBook(data)) // On met à jour l'état 'book' avec les données reçues.
        .catch((err) => console.error(err));
    };

    fetchBookData();
  }, [bookId]);

  if (!book) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="DetailPage">
      <h1>{book.volumeInfo.title}</h1>
      <img
        src={book.volumeInfo.imageLinks.thumbnail}
        alt={book.volumeInfo.title}
      />
      <div className="NotationStars">
        <NotationStars />
      </div>

      <p>
        <strong>Description :</strong> {book.volumeInfo.description}
      </p>
      <p>
        <strong>Auteur(s) :</strong> {book.volumeInfo.authors?.join(", ")}
      </p>
      <p>
        <strong>Genre(s) :</strong> {book.volumeInfo.categories?.join(", ")}
      </p>
      <p>
        <strong>Éditeur :</strong> {book.volumeInfo.publisher}
      </p>
      <p>
        <strong>Date de publication :</strong> {book.volumeInfo.publishedDate}
      </p>
      <div className="visitLibrairyButton">
        <a
          href="https://www.librairiesindependantes.com/"
          className="visitLibrairyButton"
        >
          <div className="lib">Librairies indépendantes</div>
        </a>
      </div>
      <div className="visitMomoxButton">
        <a href="https://www.momox-shop.fr/" className="visitMomoxButton">
          <div className="M">Momox</div>
        </a>
      </div>
    </div>
  );
}

export default DetailSelection;
