"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const furnitureController_1 = require("../controllers/furnitureController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.get('/', authMiddleware_1.isAuthenticated, furnitureController_1.getAllFurniture);
router.post('/', authMiddleware_1.isAuthenticated, furnitureController_1.addFurniture);
exports.default = router;
