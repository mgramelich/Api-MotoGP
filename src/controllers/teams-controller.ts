import { Request, Response } from 'express';
import { getTeamsService, addTeamService, deleteTeamService, editTeamsService } from '../services/teams-service';

export const getTeam = async (req: Request, res: Response) => {
  const httpResponse = await getTeamsService(req, res);
  res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const editTeam = async (req: Request, res: Response) => {
  const httpResponse = await editTeamsService(req, res);
  res.status(httpResponse.statusCode).json(httpResponse.body);
}


export const addTeam = async (req: Request, res: Response) => {
  const httpResponse = await addTeamService(req, res);
  res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const deleteTeam = async (req: Request, res: Response) => {
  const httpResponse = await deleteTeamService(req, res);
  res.status(httpResponse.statusCode).json(httpResponse.body);
}