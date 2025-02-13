import "./style.css";

export default function About() {
  return (
    <>
      <h1 className="page-title">À propos de regarde où tu marches</h1>

      <section className="history-section">
        <h2 className="history-title">Histoire du jeu</h2>
        <article className="history-article">
          <p className="game-history">
            Je glane... Tout est parti de cette habitude que j’ai de regarder
            scrupuleusement où je mets les pieds et d’observer les petits objets
            que l’on peut trouver dans la rue (boucles d’oreilles, médaillons,
            figurines, cartes à jouer...). J’aime à inventer l’histoire qui va
            avec, comment est-il arrivé là ?
          </p>
          <p className="game-history">
            Je les ramasse et conserve ces objets dans une petite boîte, sauf
            pour les cartes à jouer. Elles, oui au pluriel car étonnamment, il
            m’est souvent arrivé de croiser une carte échouée en milieu urbain,
            elles, je les prends en photo. Je n’ose pas les sortir de leur
            endroit.
          </p>
          <p className="game-history">
            Et là me vient une idée… Un 2 de cœur, un 10 de carreau, … et si je
            reconstituais un jeu de 52 cartes à travers mes pérégrinations
            bordelaises et au-delà… Et si je n’étais pas la seule à collecter
            ces petits bouts de cartons illustrés.
          </p>
          <p className="game-history">- work in progress -</p>
        </article>
      </section>

      <section className="about-section">
        <h2 className="about-title">Qui suis-je ?</h2>
        <div className="bio-container">
          <img
            src="../src/assets/bio/photo_about.JPG"
            alt="Cécile"
            className="bio-picture"
          />
          <article className="bio-article">
            <p className="bio">Moi, c’est Cécile !</p>
            <p className="bio">
              Ancienne cheffe de projet dans le secteur culturel, j'ai troqué
              mes tableaux de bord pour du code et suis devenue développeuse
              web. Quand je ne suis pas en train de créer des sites, je traque
              les petits trésors abandonnés dans la rue – boucles d'oreilles,
              médaillons, cartes à jouer... ou je les capture en photo.
            </p>
            <p className="bio">
              Cinéma, spectacles, web (évidemment), et un soupçon de curiosité
              pour tout ce qui m'entoure, voilà ce qui m'anime au quotidien.
            </p>
            <p className="bio">
              Retrouvez-moi sur
              <a
                href="https://www.linkedin.com/in/cecilepuyol/"
                target="_blank"
                rel="noreferrer"
                className="bio-link"
              >
                LinkedIn
              </a>{" "}
              et sur{" "}
              <a
                href="https://github.com/Ccilpy"
                target="_blank"
                rel="noreferrer"
                className="bio-link"
              >
                GitHub
              </a>
              !
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
