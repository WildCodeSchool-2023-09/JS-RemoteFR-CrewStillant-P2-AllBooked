import { Link, useLoaderData } from "react-router-dom";

import { useCurrentBooks } from "../context/FavBooksContext";

import "../styles/detailPage.css";
import heart from "../assets/icons8-aimer-16.png";

import NotationStars from "../components/NotationStars";

function DetailSelection() {
  const data = useLoaderData();

  const { favBooks, setFavBooks } = useCurrentBooks();
  const heartClick = () => {
    const currentBook = favBooks.find((f) => f?.id === data.id);

    if (!currentBook) {
      console.info("add");
      setFavBooks([...favBooks, data]);
    } else {
      console.info("delete");
      favBooks.splice(favBooks.indexOf(data), 1);
    }
  };

  if (!data) {
    return <div>Chargement...</div>;
  }
  return (
    <div className="DetailPage">
      <h1>{data.volumeInfo.title}</h1>
      <img
        src={data.volumeInfo.imageLinks.thumbnail}
        alt={data.volumeInfo.title}
      />
      <button className="heart" type="button" onClick={() => heartClick()}>
        <img src={heart} alt="heart" />
      </button>
      <div className="NotationStars">
        <NotationStars />
      </div>

      <p>
        <strong>Description : </strong> {data.volumeInfo.description}
      </p>
      <p>
        <strong>Auteur(s) : </strong> {data.volumeInfo.authors?.join(", ")}
      </p>
      <p>
        <strong>Genre(s) : </strong> {data.volumeInfo.categories?.join(", ")}
      </p>
      <p>
        <strong>Éditeur : </strong> {data.volumeInfo.publisher}
      </p>
      <p>
        <strong>Date de publication : </strong> {data.volumeInfo.publishedDate}
      </p>
      <p>
        <strong>ISBN : </strong>
        {data.volumeInfo.industryIdentifiers[0]?.identifier} /&nbsp;
        {data.volumeInfo.industryIdentifiers[1]?.identifier}
      </p>
      <div className="visitLibrairyButton">
        <Link
          to={`https://www.librairiesindependantes.com/product/search/?query=${data.volumeInfo.title}`}
          className="visitLibrairyButton"
        >
          <div className="lib">Librairies indépendantes</div>
        </Link>
      </div>
      <div className="visitMomoxButton">
        <Link
          to={`https://www.momox-shop.fr/produits-C0/?fcIsSearch=1&searchparam=${data.volumeInfo.title}`}
          className="visitMomoxButton"
        >
          <div className="M">Momox</div>
        </Link>
      </div>
    </div>
  );
}

export default DetailSelection;
