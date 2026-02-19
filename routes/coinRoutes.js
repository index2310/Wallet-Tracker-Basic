// routes/coinRoutes.js
import express from 'express';
import CoinController from '../controllers/CoinController.js';  // Pengimporan yang benar

const router = express.Router();
const coinController = new CoinController();

// Rute untuk mendapatkan harga koin
router.get('/coin/:coinId', coinController.getCoinPrice);

export default router;