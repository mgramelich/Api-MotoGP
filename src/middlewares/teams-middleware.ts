import { Request, Response } from 'express';
import { permissoes } from '../data/permissoes';


const middlewareTeams = (req: Request, res: Response, next: Function) => {
  console.log('Entrou Middleware: Teams');
  console.log('reqParams: ', req?.params?.id ?? "");

  // Validar leitura
  if (!permissoes.teams.access) {
    res.status(400).json({ msg: "Sem permissão de acesso (Teams)" });
    return;
  }

  // Validar edição
  if (req.route.path.includes('edit-team')) {
    if (!permissoes.teams.edit) {
      res.status(400).json({ msg: "Sem permissão de editar (Teams)" });
      return;
    }
  }


  next();
};

export default middlewareTeams;