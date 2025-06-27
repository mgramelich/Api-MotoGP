import { Request, Response } from 'express';
import { ok } from '../utils/http-helper';

export const getTeam = (req: Request, res: Response) => {
  //const 
  res.status(200).json({ msg: "Teams Controller (getTeams)" });
}

export const editTeam = (req: Request, res: Response) => {
  res.status(200).json({ msg: "Teams Controller (editTeams)" });
}