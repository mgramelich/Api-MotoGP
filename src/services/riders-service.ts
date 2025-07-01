import { Request, Response } from 'express';
import { ok, noContent, badRequest } from '../utils/http-helper';
import { findRider, addRider } from '../repositories/riders-repository';
import { IRiderModel } from '../models/rider-model';


//
export const getRiderService = async (req: Request, res: Response) => {
  const parametro = req?.params?.param ?? null;

  const data = await findRider(parametro);
  if (data) {
    return await ok(data);
  }

  return await noContent();
}

//
export const addRiderService = async (req: Request, res: Response) => {

  if (!req?.body) {
    return await badRequest();
  }

  const data = await addRider(req.body);
  if (data) {
    return await ok(data);
  }
  else {
    return await badRequest();
  }

  return await noContent();
}



//
export const editRiderService = async (req: Request, res: Response) => {
  const id = parseInt(req?.params?.id) ?? 0;

  if (id > 0) {
    const data = { id: 1, name: "Jorge Martin" };
    return await ok(data);
  }

  return await badRequest();
}