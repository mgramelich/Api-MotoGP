import { Router, Request, Response, NextFunction } from 'express';
import { login } from '../controllers/auth-controller';

import ridersRoutes from './rider-routes';
import teamsRoutes from './teams-routes';

//
const router: Router = Router();

// Middleware Global
const midRoutes = async (req: Request, res: Response, next: NextFunction) => {
  console.log('====================================');
  console.log(`Middleware Global - Time: ${Date.now()}`);
  console.log('reqPath:', req.path ?? "");
  console.log('====================================');

  next();
};


router.post('/login', login);
router.use(midRoutes);
router.use(ridersRoutes);
router.use(teamsRoutes);

//
export default router;