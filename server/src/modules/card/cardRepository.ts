import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type Card = {
  id: number;
  username: string;
  mail?: string | null;
  card_rank: string;
  picture_url: string;
  found_date: string;
  location: string;
  description: string;
  suit_id: number;
  suit: string;
};

class CardRepository {
  async create(card: Omit<Card, "id">) {
    try {
      const suit_id = card.suit_id ?? null;
      const [result] = await databaseClient.execute<Result>(
        `INSERT INTO card (username, mail, card_rank, picture_url, found_date, location, description, suit_id)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          card.username,
          card.mail ?? null,
          card.card_rank,
          card.picture_url,
          card.found_date,
          card.location,
          card.description,
          card.suit_id,
        ],
      );

      if (!result.insertId) {
        throw new Error("Échec de l'insertion de la carte.");
      }

      return { id: result.insertId };
    } catch (error) {
      throw new Error(`Erreur lors de la création de la carte : ${error}`);
    }
  }

  async read(id: number) {
    try {
      const [rows] = await databaseClient.query<Rows>(
        `SELECT card.*, suit.name AS suit_name 
             FROM card 
             INNER JOIN suit ON card.suit_id = suit.id 
             WHERE card.id = ?`,
        [id],
      );

      if (rows.length === 0) {
        throw new Error(`Carte avec l'ID ${id} introuvable.`);
      }

      return rows[0] as Card & { suit_name: string };
    } catch (error) {
      throw new Error(`Erreur lors de la récupération de la carte : ${error}`);
    }
  }

  async readAll() {
    try {
      const [rows] = await databaseClient.query<Rows>(
        `SELECT card.*, suit.name AS suit_name 
             FROM card 
             INNER JOIN suit ON card.suit_id = suit.id`,
      );

      if (rows.length === 0) {
        throw new Error("Aucune carte trouvée dans la base de données.");
      }

      return rows as (Card & { suit_name: string })[];
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des cartes : ${error}`);
    }
  }

  async update(id: number, card: Omit<Card, "id">) {
    try {
      const [result] = await databaseClient.execute<Result>(
        `UPDATE card 
         SET username = ?, 
             mail = ?, 
             card_rank = ?, 
             picture_url = ?, 
             found_date = ?, 
             location = ?, 
             description = ?, 
             suit_id = ? 
         WHERE id = ?`,
        [
          card.username,
          card.mail ?? null,
          card.card_rank,
          card.picture_url,
          card.found_date,
          card.location,
          card.description,
          card.suit_id,
          id,
        ],
      );

      if (result.affectedRows === 0) {
        throw new Error(
          `Aucune mise à jour effectuée. La carte avec l'ID ${id} n'existe peut-être pas.`,
        );
      }

      const [rows] = await databaseClient.query<Rows>(
        `SELECT card.*, suit.name AS suit_name 
         FROM card 
         INNER JOIN suit ON card.suit_id = suit.id 
         WHERE card.id = ?`,
        [id],
      );

      return rows[0] as Card & { suit_name: string };
    } catch (error) {
      throw new Error(`Erreur lors de la mise à jour de la carte : ${error}`);
    }
  }

  async delete(id: number) {
    try {
      const [result] = await databaseClient.execute<Result>(
        `DELETE FROM card 
        WHERE id = ?`,
        [id],
      );

      if (result.affectedRows === 0) {
        throw new Error(`Carte avec l'ID ${id} introuvable ou déjà supprimée.`);
      }

      return { message: `Carte avec l'ID ${id} supprimée avec succès.` };
    } catch (error) {
      throw new Error(`Erreur lors de la suppression de la carte : ${error}`);
    }
  }
}

export default new CardRepository();
