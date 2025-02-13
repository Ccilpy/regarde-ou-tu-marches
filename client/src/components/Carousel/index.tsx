import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Card from "../Card";
import "./style.css";
import useWindowWidth from "../../services/useWindowWidth";

// interface CardCarouselProps {
//     // Tu peux ajouter des props ici si nécessaire
//   }

const CardCarousel = (): JSX.Element => {
  const windowWidth = useWindowWidth();

  return (
    <article className="card-carousel-container">
      {windowWidth <= 768 ? (
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
          className="swiper-mobile"
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      ) : (
        <div className="card-grid desktop-only">
          <Card />
        </div>
      )}
    </article>
  );
};

export default CardCarousel;
