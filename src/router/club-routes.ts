import { Router } from 'express';
import { getClubs, editClub } from '../controllers/clubs-controller';

import middlewareClubs from '../middlewares/players-middleware';

const clubRoutes = Router();
clubRoutes.get("/get-club", getClubs);
clubRoutes.get("/get-club/:id", getClubs);
clubRoutes.post("/edit-club/:id", middlewareClubs, editClub);

export default clubRoutes;