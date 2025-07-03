import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import users from '../data/user-list.json';
import { permissoes } from '../data/permissoes';

const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
    console.error('JWT_SECRET não está definido no ambiente. Verifique seu arquivo .env');
    process.exit(1);
}

export const login = (req: Request, res: Response) => {
    const { login, senha } = req.body;
    const user = users.find(u => u.login === login && u.senha === senha);

    if (!user) {
        res.status(401).json({ message: 'Credenciais inválidas.' });
        return;
    }

    const payload = {
        id: user.id,
        name: user.name,
        role: user.role,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login realizado com sucesso!', token });
};