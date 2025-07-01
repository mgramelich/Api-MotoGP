import { Request, Response } from 'express';
import { ok } from '../utils/http-helper';
import { getTeamsService, editTeamsService } from '../services/teams-service';

export const getTeam = async (req: Request, res: Response) => {
  const httpResponse = await getTeamsService(req, res);
  res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const editTeam = async (req: Request, res: Response) => {
  const httpResponse = await editTeamsService(req, res);
  res.status(httpResponse.statusCode).json(httpResponse.body);
}