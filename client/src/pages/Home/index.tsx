import "./style.css";
import CardCarousel from "../../components/Carousel";

export default function Home() {
  return (
    <>
      <section className="home-text-container">
        <h1 className="section-title">Regarde où tu marches</h1>
        <article className="home-text">
          <p className="home-paragraph">
            Regarde où tu marches est un jeu captivant, né d'une simple
            curiosité : celle d’observer les objets laissés dans les rues. Parmi
            ces trouvailles inattendues, ce sont les cartes à jouer qui ont
            particulièrement attiré mon regard… Et si chaque carte retrouvée
            était le début d’une histoire à raconter ?
          </p>

          <p className="home-paragraph">
            Rejoins l’aventure en photographiant les cartes que tu croises, où
            que tu sois, et aide-nous à assembler un jeu de 52 cartes dispersées
            aux quatre coins du monde.
          </p>

          <p className="home-paragraph">
            L’objectif ? Collectionner ces cartes de manière ludique, imaginer
            des récits et partager ces petits bouts de monde.
          </p>
        </article>
        <article className="rank-text">
          <p className="article-title">13 valeurs & 4 couleurs</p>
          <p className="rank-section">
            Cœur : 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10 - valet - dame - roi - as
          </p>
          <p className="rank-section">
            Pique : 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10 - valet - dame - roi - as
          </p>
          <p className="rank-section">
            Carreau : 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10 - valet - dame - roi -
            as
          </p>
          <p className="rank-section">
            Trèfle : 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10 - valet - dame - roi -
            as
          </p>
          <p className="rank-section">Joker</p>
        </article>
      </section>
      <section className="game-container">
        <h2 className="game-title">Le jeu de cartes</h2>
        <CardCarousel />
      </section>
    </>
  );
}
