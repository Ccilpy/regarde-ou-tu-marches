import { useState } from "react";
import "./style.css";

export default function Game() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rank: "",
    suit: "",
    location: "",
    date: "",
    description: "",
    image: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ici, ajouter la logique pour envoyer les données à ton backend
  };

  return (
    <>
      <h1 className="game-title">Toi aussi tu veux jouer ?</h1>
      <article className="text-game">
        <p className="game-paragraph">
          C'est un jeu qui se joue lors de pérégrinations urbaines ou rurales !
        </p>
        <p className="game-paragraph">
          Le but est de repérer des cartes à jouer laissées dans la rue, dans
          des lieux publics ou dans des endroits inattendus.
        </p>
        <p className="game-paragraph">
          Tu la prends en photo : la photo doit capturer clairement la carte et
          son environnement immédiat pour conserver la trace de son origine.{" "}
        </p>
        <p className="game-paragraph">
          Tu me l'envoies via le formulaire ci-dessous !
        </p>
        <p className="game-paragraph">
          Le but est de reconstituer un jeu de 52 cartes à travers le monde 😉
        </p>
      </article>
      <form className="register-game" onSubmit={handleSubmit}>
        <label htmlFor="name" className="register-name">
          Nom ou pseudo
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Nom ou pseudo..."
            value={formData.name}
            onChange={handleChange}
            required
            className="register-block-name"
          />
        </label>

        <label htmlFor="email" className="register-email">
          Mail (optionnel)
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Votre adresse mail"
            value={formData.email}
            onChange={handleChange}
            className="register-block-email"
          />
        </label>

        <label htmlFor="rank" className="register-rank">
          Valeur de la carte
        </label>
        <select
          id="rank"
          name="rank"
          value={formData.rank}
          onChange={handleChange}
          required
          className="register-select-rank"
        >
          <option value="">Sélectionnez...</option>
          <option value="As">As</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="Valet">Valet</option>
          <option value="Reine">Reine</option>
          <option value="Roi">Roi</option>
          <option value="Joker">Joker</option>
        </select>

        <label htmlFor="suit" className="register-suit">
          Couleur de la carte
        </label>
        <select
          id="suit"
          name="suit"
          value={formData.suit}
          onChange={handleChange}
          required
          className="register-select-suit"
        >
          <option value="">Sélectionnez...</option>
          <option value="Cœur">❤️ Cœur</option>
          <option value="Carreau">♦️ Carreau</option>
          <option value="Pique">♠️ Pique</option>
          <option value="Trèfle">♣️ Trèfle</option>
          <option value="Autre">😄 Autre</option>
        </select>

        <label htmlFor="location" className="register-location">
          Lieu de la trouvaille
          <input
            id="location"
            type="text"
            name="location"
            placeholder="Lieu de la trouvaille"
            value={formData.location}
            onChange={handleChange}
            required
            className="register-block-location"
          />
        </label>

        <label htmlFor="date" className="register-date">
          Date de la trouvaille
          <input
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="register-block-date"
          />
        </label>

        <label htmlFor="description" className="register-description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Décrivez la scène, imaginez une histoire..."
            value={formData.description}
            onChange={handleChange}
            required
            className="register-block-description"
          />
        </label>

        <label htmlFor="image" className="register-img">
          La Carte !
          <input
            id="image"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            required
            className="register-block-img"
          />
        </label>

        <button type="submit">Jouer !</button>
      </form>
      <article className="text-game">
        <p className="game-paragraph">
          Une fois envoyée ta carte sera soumise à validation !
        </p>
        <p className="game-paragraph">Une fois validée, elle sera publiée !</p>
        <p className="game-paragraph">
          Pour plus d'infos n'hésite pas à me contacter 😉
        </p>
      </article>
    </>
  );
}
