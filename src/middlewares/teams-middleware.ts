import { Request, Response } from 'express';
import { permissoes } from '../data/permissoes';


const middlewareTeams = (req: Request, res: Response, next: Function) => {
  // Validar leitura
  if (!permissoes.teams.access) {
    res.status(400).json({ msg: "Sem permissão de acesso (Teams)" });
    return;
  }

  // Validar Cadastro
  if (req.route.path.includes('add-team')) {
    if (!permissoes.teams.add) {
      res.status(400).json({ msg: "Sem permissão de cadastrar (Teams)" });
      return;
    }
  }

  // Validar exclusão
  if (req.route.path.includes('delete-team')) {
    if (!permissoes.teams.delete) {
      res.status(400).json({ msg: "Sem permissão de remover (Teams)" });
      return;
    }
  }

  // Validar edição
  if (req.route.path.includes('edit-team')) {
    if (!permissoes.teams.update) {
      res.status(400).json({ msg: "Sem permissão de editar (Teams)" });
      return;
    }
  }

  next();
};

export default middlewareTeams;