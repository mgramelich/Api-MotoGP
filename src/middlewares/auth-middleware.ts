import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { permissoes } from '../data/permissoes';

const JWT_SECRET = process.env.JWT_SECRET as string;

// Estende a interface Request do Express para incluir a propriedade 'user'
declare module 'express-serve-static-core' {
    interface Request {
        user?: {
            id: string;
            name: string;
            role: number;
            permissions: typeof permissoes.admin;
        };
    }
}

// Mapeia os roles numéricos para as chaves do objeto permissoes
const roleMap: { [key: number]: keyof typeof permissoes } = {
    1: 'admin',
    2: 'convidado',
    3: 'usuario'
};

export const authenticateJWT = (req: Request, res: Response, next: NextFunction): void => {
    // Permite acesso livre à rota get-rider
    if (req.path.includes('get-rider') || req.path.includes('get-team')) {
        return next();
    }

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ message: 'Token de autenticação não fornecido' });
        return;
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(401).json({ message: 'Token de autenticação inválido ou expirado' });
            return;
        }

        // Se o token é válido, anexa as informações do usuário (incluindo permissões) ao req
        const userPayload = decoded as { id: string; name: string; role: number };
        const roleKey = roleMap[userPayload.role];

        if (!roleKey) {
            res.status(401).json({ message: 'Role inválido' });
            return;
        }

        req.user = {
            ...userPayload,
            permissions: permissoes[roleKey]
        };
        next();
    });
};