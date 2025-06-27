import { Router } from 'express';
import { getTeam, editTeam } from '../controllers/teams-controller';

import middlewareTeams from '../middlewares/riders-middleware';

const teamsRoutes = Router();
teamsRoutes.get("/get-team", getTeam);
teamsRoutes.get("/get-team/:id", getTeam);
teamsRoutes.post("/edit-team/:id", middlewareTeams, editTeam);

export default teamsRoutes;