import { Request, Response } from 'express';
import { ok, noContent, badRequest } from '../utils/http-helper';

//
export const getRiderService = async (req: Request, res: Response) => {
  const data = { id: 1, rider: "Jorge Martin" };

  if (!data) {
    return await ok(data);
  }

  return await noContent();
}

//
export const editRiderService = async (req: Request, res: Response) => {
  const id = parseInt(req?.params?.id) ?? 0;

  if (id > 0) {
    const data = { id: 1, rider: "Jorge Martin" };
    return await ok(data);
  }

  return await badRequest();
}