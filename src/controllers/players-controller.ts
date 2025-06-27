import { Request, Response } from 'express';
import { getPlayerService, editPlayerService } from '../services/players-service';

export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await getPlayerService(req, res);
  res.status(httpResponse.statusCode).json(httpResponse.body);
}


export const editPlayer = async (req: Request, res: Response) => {
  const httpResponse = await editPlayerService(req, res);
  res.status(httpResponse.statusCode).json(httpResponse.body);
}