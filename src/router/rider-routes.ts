import { Router, Request, Response, NextFunction } from 'express';
import { getRider, addRider, deleteRider, editRider } from '../controllers/riders-controller';
import middlewareRiders from '../middlewares/riders-middleware';
import { authenticateJWT } from '../middlewares/auth-middleware';

const setAction = (action: string) => {
    return (req: Request, _res: Response, next: NextFunction) => {
        req.query.action = action;
        next();
    };
};

const riderRoutes = Router();

// buscar (rota pública)
riderRoutes.get("/get-rider", getRider);
riderRoutes.get("/get-rider/:param", getRider);

// rotas protegidas
riderRoutes.use(authenticateJWT);

// cadastrar
riderRoutes.post("/add-rider", setAction('add-rider'), middlewareRiders, addRider);

// excluir
riderRoutes.delete("/delete-rider/:id", setAction('delete-rider'), middlewareRiders, deleteRider);

// editar
riderRoutes.post("/edit-rider", setAction('edit-rider'), middlewareRiders, editRider);

export default riderRoutes;