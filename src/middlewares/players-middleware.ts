import { Request, Response } from 'express';
import { permissoes } from '../data/permissoes';


const middlewarePlayers = (req: Request, res: Response, next: Function) => {
  console.log('Entrou Middleware: Players');
  console.log('reqParams: ', req?.params.id ?? "");

  // Validar leitura
  if (!permissoes.players.access) {
    res.status(400).json({ msg: "Sem permissão de acesso (Players)" });
    return;
  }

  // Validar edição
  if (req.route.path.includes('edit-player')) {
    if (!permissoes.players.edit) {
      res.status(400).json({ msg: "Sem permissão de editar (Players)" });
      return;
    }
  }


  next();
};

export default middlewarePlayers;