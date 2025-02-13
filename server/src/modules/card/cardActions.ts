import type { RequestHandler } from "express";
import cardRepository from "./cardRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const cards = await cardRepository.readAll();

    res.json(cards);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const cardId = +req.params.id;

    if (cardId <= 0) {
      res.status(400).json({ error: "ID invalide." });
      return;
    }

    const card = await cardRepository.read(cardId);

    if (!card) {
      res.sendStatus(404);
    } else {
      res.json(card);
    }
  } catch (err) {
    next(err);
  }
};

const uploadImage: RequestHandler = (req, res, next) => {
  if (req.file) {
    const imageUrl = `/card_uploads/${req.file.filename}`;
    req.body.picture_url = imageUrl;
    return next();
  }
  res.status(400).json({ error: "Aucune image téléchargée." });
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const {
      username,
      card_rank,
      picture_url,
      found_date,
      location,
      description,
      suit_id,
    } = req.body || {};

    if (
      !username ||
      !card_rank ||
      !picture_url ||
      !found_date ||
      !location ||
      !description ||
      !suit_id
    ) {
      res
        .status(400)
        .json({ error: "Tous les champs obligatoires doivent être remplis." });
    }

    const insertId = await cardRepository.create(req.body);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const cardId = +req.params.id;
    if (cardId <= 0) {
      res.status(400).json({ error: "ID invalide." });
      return;
    }

    const {
      username,
      card_rank,
      picture_url,
      found_date,
      location,
      description,
      suit_id,
    } = req.body;

    if (
      !username ||
      !card_rank ||
      !picture_url ||
      !found_date ||
      !location ||
      !description ||
      !suit_id
    ) {
      res
        .status(400)
        .json({ error: "Tous les champs obligatoires doivent être remplis." });
      return;
    }

    const updatedCard = await cardRepository.update(cardId, req.body);

    if (updatedCard) {
      res.status(204).send();
    } else {
      res.status(404).send();
    }
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const cardId = +req.params.id;
    if (cardId <= 0) {
      res.status(400).json({ error: "ID invalide." });
      return;
    }

    const deletedCard = await cardRepository.delete(cardId);

    if (deletedCard) {
      res.status(204).send();
    } else {
      res.status(404).send();
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read, add, edit, destroy, uploadImage };
