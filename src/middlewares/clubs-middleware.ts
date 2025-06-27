import { Request, Response } from 'express';
import { permissoes } from '../data/permissoes';


const middlewareClubs = (req: Request, res: Response, next: Function) => {
  console.log('Entrou Middleware: Clubs');
  console.log('reqParams: ', req?.params?.id ?? "");

  // Validar leitura
  if (!permissoes.clubs.access) {
    res.status(400).json({ msg: "Sem permissão de acesso (Clubs)" });
    return;
  }

  // Validar edição
  if (req.route.path.includes('edit-club')) {
    if (!permissoes.clubs.edit) {
      res.status(400).json({ msg: "Sem permissão de editar (Clubs)" });
      return;
    }
  }


  next();
};

export default middlewareClubs;