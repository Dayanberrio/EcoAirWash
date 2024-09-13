"use strict";
// src/services/authService.ts
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
exports.createUser = exports.findUserByEmail = void 0;
// Almacenamiento en memoria para usuarios
const userStore = [];
// Encuentra un usuario por su email
const findUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Busca el usuario en el almacenamiento en memoria
        const user = userStore.find(user => user.email === email);
        return user || null;
    }
    catch (error) {
        console.error('Error al buscar usuario por email:', error);
        throw new Error('Error al buscar usuario');
    }
});
exports.findUserByEmail = findUserByEmail;
// Crea un nuevo usuario
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Valida los datos
        if (!user.email || !user.password) {
            throw new Error('Faltan campos obligatorios');
        }
        // Verifica si el usuario ya existe
        const existingUser = yield (0, exports.findUserByEmail)(user.email);
        if (existingUser) {
            throw new Error('El usuario ya existe');
        }
        // Agrega el nuevo usuario al almacenamiento en memoria
        userStore.push(user);
    }
    catch (error) {
        console.error('Error al crear usuario:', error);
        throw new Error('Error al crear usuario');
    }
});
exports.createUser = createUser;
