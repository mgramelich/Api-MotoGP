import { ITeamModel } from "../models/team-model";
import { teamsList } from "../data/teams-list";

export const findTeam = async (id?: ITeamModel['id']): Promise<ITeamModel | ITeamModel[] | null> => {
  if (id && id > 0) {
    return teamsList.find(team => team.id === id) ?? null;
  }

  return teamsList;
};

