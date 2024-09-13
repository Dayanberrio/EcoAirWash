"use strict";
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
exports.addFurniture = exports.getAllFurniture = void 0;
const furnitureService_1 = require("../services/furnitureService");
const getAllFurniture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const furniture = yield (0, furnitureService_1.findAllFurniture)();
        res.status(200).json(furniture);
    }
    catch (error) {
        res.status(500).send('Error al obtener muebles');
    }
});
exports.getAllFurniture = getAllFurniture;
const addFurniture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { puestoCantidad, tipoServicio, tipoMaterial } = req.body;
        yield (0, furnitureService_1.createFurniture)({ puestoCantidad, tipoServicio, tipoMaterial });
        res.status(201).send('Mueble creado');
    }
    catch (error) {
        res.status(500).send('Error al crear el mueble');
    }
});
exports.addFurniture = addFurniture;
