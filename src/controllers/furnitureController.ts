import { Request, Response } from 'express';
import { findAllFurniture, createFurniture } from '../services/furnitureService';

export const getAllFurniture = async (req: Request, res: Response) => {
  try {
    const furniture = await findAllFurniture();
    res.status(200).json(furniture);
  } catch (error) {
    res.status(500).send('Error al obtener muebles');
  }
};

export const addFurniture = async (req: Request, res: Response) => {
  try {
    const { puestoCantidad, tipoServicio, tipoMaterial } = req.body;
    await createFurniture({ puestoCantidad, tipoServicio, tipoMaterial });
    res.status(201).send('Mueble creado');
  } catch (error) {
    res.status(500).send('Error al crear el mueble');
  }
};
