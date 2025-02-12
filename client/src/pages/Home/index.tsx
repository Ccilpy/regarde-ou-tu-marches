import "./style.css";
import Card from "../../components/Card";

export default function Home() {
  return (
    <>
      <section className="home-text-container">
        <h1 className="section-title">Regarde où tu marches</h1>
        <article className="home-text">
          <p>Lorem ipsum dolor sit amet</p>
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
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
        <Card />
      </section>
    </>
  );
}
