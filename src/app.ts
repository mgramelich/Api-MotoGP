import express from 'express';
import cors from 'cors';
import router from './router/_routes';

export const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use("/api", router);

  return app;
}