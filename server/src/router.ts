import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

import cardActions from "./modules/card/cardActions";

router.get("/api/cards", cardActions.browse);
router.get("/api/cards/:id", cardActions.read);
router.post("/api/cards", cardActions.add);
router.put("/api/cards/:id", cardActions.edit);
router.delete("/api/cards/:id", cardActions.destroy);

export default router;
