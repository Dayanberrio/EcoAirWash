import { Request, Response } from 'express';
import { createUser, findUserByEmail } from '../services/authService';

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    await createUser({ email, password });
    res.status(201).send('Usuario creado');
  } catch (error) {
    res.status(500).send('Error al crear el usuario');
  }
};
