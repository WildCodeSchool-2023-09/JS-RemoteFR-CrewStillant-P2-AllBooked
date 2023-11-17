import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import "../styles/thecarousel.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import img from "../assets/notfound.png";

function Carousel({ data }) {
  const navigate = useNavigate();

  console.info(data);

  return (
    <section className="totalCarousel">
      <div className="title">
        <h1>Nos Coups de coeur</h1>
      </div>
      <Splide
        options={{
          type: "loop",
          rewind: true,
          fixedHeight: "200px",
          width: "45%",
          fixedWidth: "150px",
          trimSpace: "move",
          drag: "free",
          keyboard: "true",
          focus: "center",
          slideFocus: true,
          gap: "10px",
          focusableNodes: "a",
          breakpoints: {
            580: {
              perPage: 2,
              padding: "1rem",
              gap: "35px",
            },
          },
        }}
        aria-label="Nos Coups de coeur"
      >
        {data.map((b) => (
          <SplideSlide key={b.id}>
            <button
              type="button"
              onClick={() => navigate(`detailselection/${b.id}`)}
            >
              <img
                src={
                  b.volumeInfo?.imageLinks?.thumbnail
                    ? b.volumeInfo?.imageLinks?.thumbnail
                    : img
                }
                alt={b.volumeInfo.title}
              />
            </button>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

Carousel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Carousel;
