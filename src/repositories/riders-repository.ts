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



export const addRider = async (dados: IRiderModel): Promise<boolean> => {
  console.log("Dados recebidos para adicionar: ", dados);

  if (Object.keys(dados).length === 0) {
    return false;
  }

  const newRider: IRiderModel = {
    id: ridersList.length + 1,
    name: dados.name,
    currentNumber: dados.currentNumber,
    teamId: dados.teamId
  };


  console.log("\n\nNovo piloto a ser adicionado: ", newRider);
  ridersList.push(newRider);
  console.log("\n\nLista de pilotos atualizada: ", ridersList);

  fs.writeFileSync(fileName, JSON.stringify(ridersList));

  return true;
};