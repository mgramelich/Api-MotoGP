import { Request, Response, NextFunction } from 'express';
import { permissoes } from '../data/permissoes';

const middlewareRiders = (req: Request, res: Response, next: NextFunction) => {
  const { action } = req.query;

  // Permite acesso livre à rota get-rider
  if (action === 'get-rider') {
    return next();
  }

  const userPermissions = req.user?.permissions?.riders;

  if (!userPermissions) {
    res.status(401).json({ message: 'Não autenticado ou permissões não carregadas.' });
    return;
  }

  switch (action) {
    case 'add-rider':
      if (!userPermissions.add) {
        res.status(403).json({ message: 'Acesso negado: Você não tem permissão para adicionar pilotos.' });
        return;
      }
      break;
    
    case 'delete-rider':
      if (!userPermissions.delete) {
        res.status(403).json({ message: 'Acesso negado: Você não tem permissão para deletar pilotos.' });
        return;
      }
      break;
    
    case 'edit-rider':
      if (!userPermissions.update) {
        res.status(403).json({ message: 'Acesso negado: Você não tem permissão para editar pilotos.' });
        return;
      }
      break;
    
    default:
      if (!userPermissions.access) {
        res.status(403).json({ message: 'Acesso negado ao recurso de pilotos.' });
        return;
      }
      break;
  }

  next();
};

export default middlewareRiders;