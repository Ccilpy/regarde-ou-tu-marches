import { useState } from "react";
import "./style.css";

export default function Card() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
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
            src="../src/assets/cards_pictures/8_de_pique.jpg"
            alt="8 de pique"
            className="card_picture"
          />
          <figcaption className="card-description">
            <p className="card-rank">- 8 de pique -</p>
            <p className="location-date">
              Place St Michel, Bordeaux - 11 juin 2014
            </p>
          </figcaption>
        </figure>

        <section className="card-back">
          <p className="back-text-top">- 8 de pique -</p>
          <p className="back-text-author">from Isabelle C.</p>
          <p className="back-text-bottom">
            trouvée à angle rue des Faures (devant la pharmacie)
          </p>
        </section>
      </div>
    </button>
  );
}
