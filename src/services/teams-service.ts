import { Request, Response } from 'express';
import { ok, noContent, badRequest } from '../utils/http-helper';
import { findTeam, addTeam, deleteTeam, editTeam } from '../repositories/teams-repository';
import { ITeamModel } from '../models/team-model';

//
export const getTeamsService = async (req: Request, res: Response) => {
  const parametro = req?.params?.parametro ?? null;

  const data = await findTeam(parametro);
  if (data) {
    return await ok(data);
  }

  return await noContent();
}

//
export const editTeamsService = async (req: Request, res: Response) => {
  const dados: ITeamModel = req?.body ?? null;

  if (!dados || !dados.id) {
    return await noContent();
  }

  const resp = await editTeam(dados);
  if (resp) {
    return await ok(resp);
  } else {
    return await badRequest();
  }
}


//
export const addTeamService = async (req: Request, res: Response) => {
  if (!req?.body) {
    return await noContent();
  }
  else {
    const data = await addTeam(req.body);
    if (data) {
      return await ok(data);
    }
    else {
      return await badRequest();
    }
  }
}

//
export const deleteTeamService = async (req: Request, res: Response) => {
  if (!req?.params?.id) {
    return await noContent();
  }

  const data = await deleteTeam(parseInt(req.params.id));
  if (data) {
    return await ok(data);
  }
  else {
    return await badRequest();
  }
}