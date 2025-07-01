import { IRiderModel } from "../models/rider-model";
import { ridersList } from "../data/rider-list";
import fs from 'fs';
import path from 'path';

const fileName = path.join(__dirname, '../data/rider-list.json');


export const findRider = async (parametro?: string | number | null): Promise<IRiderModel | IRiderModel[] | null> => {
  if (parametro) {
    if (isNaN(Number(parametro))) {
      return ridersList.filter(rider => rider.name.toLowerCase().includes(parametro.toString().toLowerCase())) ?? null;
    }

    if (parseInt(parametro.toString()) > 0) {
      return ridersList.find(rider => rider.id === parseInt(parametro.toString())) ?? null;
    }
  }

  return ridersList;
};


//
export const addRider = async (dados: IRiderModel): Promise<boolean> => {
  if (Object.keys(dados).length === 0) {
    return false;
  }

  // Gera o ID
  const nextId = ridersList.reduce((max, rider) => {
    if (typeof rider?.id === "number" && rider.id > max) {
      return rider.id;
    }

    return max;
  }, 0);

  //
  const newRider: IRiderModel = {
    id: nextId + 1,
    name: dados.name,
    currentNumber: dados.currentNumber,
    teamId: dados.teamId
  };

  ridersList.push(newRider);
  fs.writeFileSync(fileName, JSON.stringify(ridersList));

  return true;
};


//
export const deleteRider = async (riderId: IRiderModel['id']): Promise<boolean> => {
  const index = ridersList.findIndex(rider => rider.id === riderId);
  if (index === -1) {
    return false; // Rider not found
  }

  ridersList.splice(index, 1);
  fs.writeFileSync(fileName, JSON.stringify(ridersList));

  return true;
};