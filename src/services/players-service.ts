import { Request, Response } from 'express';
import { ok, noContent, badRequest } from '../utils/http-helper';

//
export const getPlayerService = async (req: Request, res: Response) => {
  const data = { player: "Ronaldo" };

  if (!data) {
    return await ok(data);
  }

  return await noContent();
}

//
export const editPlayerService = async (req: Request, res: Response) => {
  const id = parseInt(req?.params?.id) ?? 0;

  if (id > 0) {
    const data = { player: "Ronaldo" };
    return await ok(data);
  }

  return await badRequest();
}