import { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Card from "../Card";
import "./style.css";
import useWindowWidth from "../../services/useWindowWidth";

interface CardType {
  id: number;
  username: string;
  card_rank: string;
  picture_url: string;
  found_date: string;
  location: string;
  description: string;
  suit_name: string;
}

const CardCarousel = (): JSX.Element => {
  const [cards, setCards] = useState<CardType[]>([]);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/cards`,
        );
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des cartes.");
        }
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCards();
  }, []);

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
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <Card card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="card-grid desktop-only">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      )}
    </article>
  );
};

export default CardCarousel;
