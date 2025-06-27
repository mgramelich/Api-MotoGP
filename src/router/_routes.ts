import { Router, Request, Response, NextFunction } from 'express';
import playerRoutes from './player-routes';
import clubRoutes from './club-routes';

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

router.use(midRoutes);
router.use(playerRoutes);
router.use(clubRoutes);

//
export default router;