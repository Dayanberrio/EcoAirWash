"use strict";
// src/services/furnitureService.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFurniture = exports.findAllFurniture = void 0;
// Almacenamiento en memoria para muebles
const furnitureStore = [];
// Encuentra todos los muebles
const findAllFurniture = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return furnitureStore; // Devuelve todos los muebles del almacenamiento en memoria
    }
    catch (error) {
        console.error('Error al obtener todos los muebles:', error);
        throw new Error('Error al obtener todos los muebles');
    }
});
exports.findAllFurniture = findAllFurniture;
// Crea un nuevo mueble
const createFurniture = (furniture) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Valida los datos
        if (!furniture.puestoCantidad || !furniture.tipoServicio || !furniture.tipoMaterial) {
            throw new Error('Faltan campos obligatorios');
        }
        // Agrega el nuevo mueble al almacenamiento en memoria
        furnitureStore.push(furniture);
    }
    catch (error) {
        console.error('Error al crear mueble:', error);
        throw new Error('Error al crear mueble');
    }
});
exports.createFurniture = createFurniture;
