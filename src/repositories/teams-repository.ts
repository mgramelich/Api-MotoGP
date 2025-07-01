import { ITeamModel } from "../models/team-model";
import { teamsList } from "../data/teams-list";
import fs from 'fs';
import path from 'path';

const fileName = path.join(__dirname, '../data/teams-list.json');

//
export const findTeam = async (parametro?: string | number | null): Promise<ITeamModel | ITeamModel[] | null> => {
  if (parametro) {
    if (isNaN(Number(parametro))) {
      return teamsList.filter(team => team.currentName.toLowerCase().includes(parametro.toString().toLowerCase())) ?? null;
    }

    if (parseInt(parametro.toString()) > 0) {
      return teamsList.find(team => team.id === parseInt(parametro.toString())) ?? null;
    }
  }

  return teamsList;
};

//
export const addTeam = async (dados: ITeamModel): Promise<boolean> => {
  if (Object.keys(dados).length === 0) {
    return false;
  }

  // Gera o ID
  const nextId = teamsList.reduce((max, team) => {
    if (typeof team?.id === "number" && team.id > max) {
      return team.id;
    }

    return max;
  }, 0);

  //
  const newTeam: ITeamModel = {
    id: nextId + 1, 
    factory: dados.factory,
    currentName: dados.currentName,
    type: dados.type,
    bike: dados.bike,
  };

  teamsList.push(newTeam);
  fs.writeFileSync(fileName, JSON.stringify(teamsList));

  return true;
};

//
export const deleteTeam = async (teamId: ITeamModel['id']): Promise<boolean> => {
  const index = teamsList.findIndex(team => team.id === teamId);
  if (index === -1) {
    return false;
  }

  teamsList.splice(index, 1);
  fs.writeFileSync(fileName, JSON.stringify(teamsList));

  return true;
};

//
export const editTeam = async (dados: ITeamModel): Promise<boolean> => {
  const index = teamsList.findIndex(team => team.id === dados.id);
  if (index === -1) {
    return false;
  }

  teamsList[index] = {
    ...teamsList[index],
    factory: dados.factory,
    currentName: dados.currentName,
    type: dados.type,
    bike: dados.bike,
  };

  fs.writeFileSync(fileName, JSON.stringify(teamsList));
  return true;
};
