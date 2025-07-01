import { Router } from 'express';
import { getRider, addRider, editRider } from '../controllers/riders-controller';
import middlewareRiders from '../middlewares/riders-middleware';

//
const riderRoutes = Router();
// buscar
riderRoutes.get("/get-rider", middlewareRiders, getRider);
riderRoutes.get("/get-rider/:param", middlewareRiders, getRider);

// cadastrar
riderRoutes.post("/add-rider", middlewareRiders, addRider);

// editar
riderRoutes.post("/edit-rider", middlewareRiders, editRider);
riderRoutes.post("/edit-rider/:id", middlewareRiders, editRider);

export default riderRoutes;