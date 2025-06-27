import { Request, Response } from 'express';
import { ok } from '../utils/http-helper';

export const getClubs = (req: Request, res: Response) => {
  //const 
  res.status(200).json({ msg: "Clubs Controller (getClubs)" });
}

export const editClub = (req: Request, res: Response) => {
  res.status(200).json({ msg: "Clubs Controller (editClub)" });
}