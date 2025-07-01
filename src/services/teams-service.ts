import { Request, Response } from 'express';
import { ok, noContent, badRequest } from '../utils/http-helper';
import { findTeam } from '../repositories/teams-repository';

//
export const getTeamsService = async (req: Request, res: Response) => {
  const id = parseInt(req?.params?.id ?? 0);
  const data = await findTeam(id);

  if (data) {
    return await ok(data);
  }

  return await noContent();
}

//
export const editTeamsService = async (req: Request, res: Response) => {
  const id = parseInt(req?.params?.id) ?? 0;

  if (id > 0) {
    const data = { id: 1, name: "Yamaha Team" };
    return await ok(data);
  }

  return await badRequest();
}