import express from 'express';
import { getAllFurniture, addFurniture } from '../controllers/furnitureController';
import { isAuthenticated } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', isAuthenticated, getAllFurniture);
router.post('/', isAuthenticated, addFurniture);

export default router;
