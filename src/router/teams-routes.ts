import { Router, Request, Response, NextFunction } from 'express';
import { getTeam, addTeam, deleteTeam, editTeam } from '../controllers/teams-controller';
import { authenticateJWT } from '../middlewares/auth-middleware';
import middlewareTeams from '../middlewares/riders-middleware';

const teamsRoutes = Router();

const setAction = (action: string) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    req.query.action = action;
    next();
  };
};


// buscar (rota pública)
teamsRoutes.get("/get-team", getTeam);
teamsRoutes.get("/get-team/:parametro", getTeam);

// rotas protegidas
teamsRoutes.use(authenticateJWT);

// cadastrar
teamsRoutes.post("/add-team", setAction('add-team'), middlewareTeams, addTeam);

// excluir
teamsRoutes.delete("/delete-team/:id", setAction('delete-team'), middlewareTeams, deleteTeam);

//
teamsRoutes.post("/edit-team/", setAction('edit-team'), middlewareTeams, editTeam);

export default teamsRoutes;