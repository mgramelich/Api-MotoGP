import { Router } from 'express';
import { getPlayer, editPlayer } from '../controllers/players-controller';
import middlewarePlayers from '../middlewares/players-middleware';

//
const playerRoutes = Router();
playerRoutes.get("/get-player", middlewarePlayers, getPlayer);
playerRoutes.get("/get-player/:id", middlewarePlayers, getPlayer);

playerRoutes.post("/edit-player", middlewarePlayers, editPlayer);
playerRoutes.post("/edit-player/:id", middlewarePlayers, editPlayer);

export default playerRoutes;