import { useState } from "react";
import "./style.css";

interface CardProps {
  card: {
    username: string;
    card_rank: string;
    picture_url: string;
    found_date: string;
    location: string;
    description: string;
    suit_name: string;
  };
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  return date.toLocaleDateString("fr-FR", options);
};

export default function Card({ card }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const renderCardRankAndSuit = () => {
    if (card.card_rank.toLowerCase() === "joker") {
      return "- Joker -";
    }
    return `- ${card.card_rank} de ${card.suit_name} -`;
  };

  return (
    <button
      type="button"
      className={`card-container ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
      onKeyUp={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          handleFlip();
        }
      }}
      tabIndex={0}
    >
      <div className="card-inner">
        <figure className="card-front">
          <img
            src={card.picture_url}
            alt={card.card_rank}
            className="card_picture"
          />
          <figcaption className="card-description">
            <p className="card-rank">{renderCardRankAndSuit()}</p>
            <p className="location-date">
              {card.location} - {formatDate(card.found_date)}
            </p>
          </figcaption>
        </figure>

        <section className="card-back">
          <p className="back-text-top">{renderCardRankAndSuit()}</p>
          <p className="back-text-author">from {card.username}</p>
          <p className="back-text-bottom">{card.description}</p>
        </section>
      </div>
    </button>
  );
}
