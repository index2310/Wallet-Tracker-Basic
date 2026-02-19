// controllers/CoinController.js
import CoinModel from '../models/CoinModel.js';

class CoinController {
    constructor() {
        this.coinModel = new CoinModel();
    }

    async getCoinPrice(req, res) {
        try {
            const coinId = req.params.coinId || 'bitcoin';
            const priceData = await this.coinModel.getCoinPrice(coinId);
            res.json(priceData);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching coin price', error: error.message });
        }
    }
}

// Pastikan menggunakan export default
export default CoinController;