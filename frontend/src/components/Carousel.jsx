import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import "../styles/Carousel.css";

function Carousel() {
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
          fixedWidth: "128px",
          trimSpace: false,
          drag: "free",
          keyboard: "true",
          focus: "center",
          slideFocus: true,
          gap: "4rem",
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
        <SplideSlide>
          <img src="https://picsum.photos/128/158" alt="picsum" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://picsum.photos/128/158" alt="picsum2" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://picsum.photos/128/158" alt="picsum" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://picsum.photos/128/158" alt="picsum" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://picsum.photos/128/158" alt="picsum" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://picsum.photos/128/158" alt="picsum" />
        </SplideSlide>
      </Splide>
    </section>
  );
}

export default Carousel;
