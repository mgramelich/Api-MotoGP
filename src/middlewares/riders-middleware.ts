import { Request, Response } from 'express';
import { permissoes } from '../data/permissoes';


const middlewareRiders = (req: Request, res: Response, next: Function) => {
  console.log('Entrou Middleware: Riders');
  console.log('reqParams: ', req?.params.id ?? "");

  // Validar leitura
  if (!permissoes.riders.access) {
    res.status(400).json({ msg: "Sem permissão de acesso (Riders)" });
    return;
  }

  // Validar edição
  if (req.route.path.includes('edit-rider')) {
    if (!permissoes.riders.edit) {
      res.status(400).json({ msg: "Sem permissão de editar (Riders)" });
      return;
    }
  }


  next();
};

export default middlewareRiders;