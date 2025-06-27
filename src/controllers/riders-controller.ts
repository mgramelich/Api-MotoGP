import { Request, Response } from 'express';
import { getRiderService, editRiderService } from '../services/riders-service';

export const getRider = async (req: Request, res: Response) => {
  const httpResponse = await getRiderService(req, res);
  res.status(httpResponse.statusCode).json(httpResponse.body);
}


export const editRider = async (req: Request, res: Response) => {
  const httpResponse = await editRiderService(req, res);
  res.status(httpResponse.statusCode).json(httpResponse.body);
}