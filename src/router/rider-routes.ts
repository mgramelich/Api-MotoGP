import { Router } from 'express';
import { getRider, addRider, deleteRider, editRider } from '../controllers/riders-controller';
import middlewareRiders from '../middlewares/riders-middleware';

//
const riderRoutes = Router();
// buscar
riderRoutes.get("/get-rider", middlewareRiders, getRider);
riderRoutes.get("/get-rider/:param", middlewareRiders, getRider);

// cadastrar
riderRoutes.post("/add-rider", middlewareRiders, addRider);

// excluir
riderRoutes.delete("/delete-rider/:id", middlewareRiders, deleteRider);

// editar
riderRoutes.post("/edit-rider", middlewareRiders, editRider);

export default riderRoutes;