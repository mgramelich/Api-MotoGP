import { Request, Response } from 'express';
import { permissoes } from '../data/permissoes';

const middlewareRiders = (req: Request, res: Response, next: Function) => {
  // Validar leitura
  if (!permissoes.riders.access) {
    res.status(400).json({ msg: "Sem permissão de acesso (Riders)" });
    return;
  }

  // Validar Cadastro
  if (req.route.path.includes('add-rider')) {
    if (!permissoes.riders.add) {
      res.status(400).json({ msg: "Sem permissão de cadastrar (Riders)" });
      return;
    }
  }

  // Validar exclusão
  if (req.route.path.includes('delete-rider')) {
    if (!permissoes.riders.delete) {
      res.status(400).json({ msg: "Sem permissão de remover (Riders)" });
      return;
    }
  }

  // Validar edição
  if (req.route.path.includes('edit-rider')) {
    if (!permissoes.riders.update) {
      res.status(400).json({ msg: "Sem permissão de editar (Riders)" });
      return;
    }
  }

  next();
};


export default middlewareRiders;