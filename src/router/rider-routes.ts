import { Router } from 'express';
import { getRider, editRider } from '../controllers/riders-controller';
import middlewareRiders from '../middlewares/riders-middleware';

//
const riderRoutes = Router();
riderRoutes.get("/get-rider", middlewareRiders, getRider);
riderRoutes.get("/get-rider/:id", middlewareRiders, getRider);

riderRoutes.post("/edit-rider", middlewareRiders, editRider);
riderRoutes.post("/edit-rider/:id", middlewareRiders, editRider);

export default riderRoutes;