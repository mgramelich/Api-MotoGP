import { Request, Response } from 'express';
import { ok, noContent, badRequest } from '../utils/http-helper';
import { findRider, addRider, deleteRider, editRider } from '../repositories/riders-repository';
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
    return await noContent();
  }
  else {
    const data = await addRider(req.body);
    if (data) {
      return await ok(data);
    }
    else {
      return await badRequest();
    }
  }
}

//
export const deleteRiderService = async (req: Request, res: Response) => {
  if (!req?.params?.id) {
    return await noContent();
  }

  const data = await deleteRider(parseInt(req.params.id));
  if (data) {
    return await ok(data);
  }
  else {
    return await badRequest();
  }
}


//
export const editRiderService = async (req: Request, res: Response): Promise<any> => {
  const dados: IRiderModel = req?.body ?? null;

  if (!dados || !dados.id) {
    return await noContent();
  }

  const resp = await editRider(dados);
  if (resp) {
    return await ok(resp);
  } else {
    return await badRequest();
  }
}