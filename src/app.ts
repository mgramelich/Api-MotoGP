import express, { Request, Response } from 'express';

import router from './router/_routes';

export const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use("/api", router);

  return app;
}