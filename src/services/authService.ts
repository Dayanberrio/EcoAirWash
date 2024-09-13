// src/services/authService.ts

import { User } from '../models/user';

// Almacenamiento en memoria para usuarios
const userStore: User[] = [];

// Encuentra un usuario por su email
export const findUserByEmail = async (email: string): Promise<User | null> => {
  try {
    // Busca el usuario en el almacenamiento en memoria
    const user = userStore.find(user => user.email === email);
    return user || null;
  } catch (error) {
    console.error('Error al buscar usuario por email:', error);
    throw new Error('Error al buscar usuario');
  }
};

// Crea un nuevo usuario
export const createUser = async (user: User): Promise<void> => {
  try {
    // Valida los datos
    if (!user.email || !user.password) {
      throw new Error('Faltan campos obligatorios');
    }

    // Verifica si el usuario ya existe
    const existingUser = await findUserByEmail(user.email);
    if (existingUser) {
      throw new Error('El usuario ya existe');
    }

    // Agrega el nuevo usuario al almacenamiento en memoria
    userStore.push(user);
  } catch (error) {
    console.error('Error al crear usuario:', error);
    throw new Error('Error al crear usuario');
  }
};
