import { Router } from 'express';
import { getTeam, addTeam, deleteTeam, editTeam } from '../controllers/teams-controller';

import middlewareTeams from '../middlewares/riders-middleware';

const teamsRoutes = Router();
// buscar
teamsRoutes.get("/get-team", getTeam);
teamsRoutes.get("/get-team/:parametro", getTeam);

// cadastrar
teamsRoutes.post("/add-team", middlewareTeams, addTeam);

// excluir
teamsRoutes.delete("/delete-team/:id", middlewareTeams, deleteTeam);

//
teamsRoutes.post("/edit-team/", middlewareTeams, editTeam);

export default teamsRoutes;