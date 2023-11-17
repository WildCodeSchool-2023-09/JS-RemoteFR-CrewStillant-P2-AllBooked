import { Link, useLoaderData } from "react-router-dom";
import "../styles/detailPage.css";
import NotationStars from "../components/NotationStars";

function DetailSelection() {
  const data = useLoaderData();

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
