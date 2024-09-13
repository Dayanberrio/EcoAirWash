// src/services/furnitureService.ts

import { Furniture } from '../models/furniture';

// Almacenamiento en memoria para muebles
const furnitureStore: Furniture[] = [];

// Encuentra todos los muebles
export const findAllFurniture = async (): Promise<Furniture[]> => {
  try {
    return furnitureStore; // Devuelve todos los muebles del almacenamiento en memoria
  } catch (error) {
    console.error('Error al obtener todos los muebles:', error);
    throw new Error('Error al obtener todos los muebles');
  }
};

// Crea un nuevo mueble
export const createFurniture = async (furniture: Furniture): Promise<void> => {
  try {
    // Valida los datos
    if (!furniture.puestoCantidad || !furniture.tipoServicio || !furniture.tipoMaterial) {
      throw new Error('Faltan campos obligatorios');
    }

    // Agrega el nuevo mueble al almacenamiento en memoria
    furnitureStore.push(furniture);
  } catch (error) {
    console.error('Error al crear mueble:', error);
    throw new Error('Error al crear mueble');
  }
};
