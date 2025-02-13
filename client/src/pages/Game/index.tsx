import { useState } from "react";
import "./style.css";

export default function Game() {
  const [formData, setFormData] = useState({
    username: "",
    mail: "",
    card_rank: "",
    suit: "",
    location: "",
    found_date: "",
    description: "",
    image: null as File | null,
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

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

  const suitMapping: Record<string, number> = {
    Cœur: 1,
    Carreau: 2,
    Pique: 3,
    Trèfle: 4,
    Autre: 5,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mappedSuit = suitMapping[formData.suit] ?? null;

    if (!formData.image) {
      setErrorMessage("Veuillez télécharger une image.");
      return;
    }

    if (
      !formData.username ||
      !formData.card_rank ||
      !mappedSuit ||
      !formData.location ||
      !formData.found_date ||
      !formData.description
    ) {
      setErrorMessage("Veuillez remplir tous les champs requis.");
      return;
    }

    const form = new FormData();
    form.append("username", formData.username || "");
    form.append("mail", formData.mail || "");
    form.append("card_rank", formData.card_rank || "");
    form.append("suit_id", String(mappedSuit));
    form.append("location", formData.location || "");
    form.append("found_date", formData.found_date || "");
    form.append("description", formData.description || "");

    if (formData.image) {
      form.append("image", formData.image);
    }

    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/cards`,
        {
          method: "POST",
          body: form,
        },
      );

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi des données.");
      }

      setFormData({
        username: "",
        mail: "",
        card_rank: "",
        suit: "",
        location: "",
        found_date: "",
        description: "",
        image: null,
      });

      setLoading(false);
      setSuccessMessage("Carte envoyée avec succès ! Merci 😊");
      setErrorMessage("");
    } catch (error) {
      setLoading(false);
      console.error(error);
      setErrorMessage(
        "Une erreur est survenue lors de l'envoi de la carte. Veuillez réessayer plus tard.",
      );
      setSuccessMessage("");
    }
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
        <label htmlFor="username" className="register-name">
          Nom ou pseudo
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Nom ou pseudo..."
            value={formData.username}
            onChange={handleChange}
            required
            className="register-block-name"
          />
        </label>

        <label htmlFor="mail" className="register-email">
          Mail (optionnel)
          <input
            id="mail"
            type="email"
            name="mail"
            placeholder="Votre adresse mail"
            value={formData.mail}
            onChange={handleChange}
            className="register-block-email"
          />
        </label>

        <label htmlFor="rank" className="register-rank">
          Valeur de la carte
        </label>
        <select
          id="rank"
          name="card_rank"
          value={formData.card_rank}
          onChange={handleChange}
          required
          className="register-select-rank"
        >
          <option value="">Sélectionnez...</option>
          {[
            "As",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Valet",
            "Reine",
            "Roi",
            "Joker",
          ].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
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
          {Object.keys(suitMapping).map((suit) => (
            <option key={suit} value={suit}>
              {suit}
            </option>
          ))}
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

        <label htmlFor="found_date" className="register-date">
          Date de la trouvaille
          <input
            id="found_date"
            type="date"
            name="found_date"
            value={formData.found_date}
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
            placeholder="Décris la scène, imagine une histoire..."
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

        <button type="submit" disabled={loading}>
          {loading ? "Envoi en cours..." : "Jouer !"}
        </button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </>
  );
}
