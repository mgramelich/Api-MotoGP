import { Request, Response } from 'express';
import { permissoes } from '../data/permissoes';


const middlewareTeams = (req: Request, res: Response, next: Function) => {
  const { action } = req.query;

  // Permite acesso livre à rota get-team
  if (action === 'get-team') {
    return next();
  }

  const teamsPermissions = req.user?.permissions?.teams;

  if (!teamsPermissions) {
    res.status(401).json({ message: 'Não autenticado ou permissões não carregadas.' });
    return;
  }

  switch (action) {
    case 'add-team':
      if (!teamsPermissions.add) {
        res.status(403).json({ message: 'Acesso negado: Você não tem permissão para adicionar times.' });
        return;
      }
      break;

    case 'delete-team':
      if (!teamsPermissions.delete) {
        res.status(403).json({ message: 'Acesso negado: Você não tem permissão para deletar times.' });
        return;
      }
      break;

    case 'edit-team':
      if (!teamsPermissions.update) {
        res.status(403).json({ message: 'Acesso negado: Você não tem permissão para editar times.' });
        return;
      }
      break;

    default:
      if (!teamsPermissions.access) {
        res.status(403).json({ message: 'Acesso negado ao recurso de times.' });
        return;
      }
      break;
  }

  // Validar leitura
  // if (!permissoes.role.roleAtual.access) {
  //   res.status(400).json({ msg: "Sem permissão de acesso (Teams)" });
  //   return;
  // }

  // Validar Cadastro
  // if (req.route.path.includes('add-team')) {
  //   if (!permissoes.teams.add) {
  //     res.status(400).json({ msg: "Sem permissão de cadastrar (Teams)" });
  //     return;
  //   }
  // }

  // Validar exclusão
  // if (req.route.path.includes('delete-team')) {
  //   if (!permissoes.teams.delete) {
  //     res.status(400).json({ msg: "Sem permissão de remover (Teams)" });
  //     return;
  //   }
  // }

  // Validar edição
  // if (req.route.path.includes('edit-team')) {
  //   if (!permissoes.teams.update) {
  //     res.status(400).json({ msg: "Sem permissão de editar (Teams)" });
  //     return;
  //   }
  // }

  next();
};

export default middlewareTeams;