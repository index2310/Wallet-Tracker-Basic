// models/CoinModel.js
import axios from 'axios';

class CoinModel {
    constructor() {
        this.apiUrl = 'https://api.coingecko.com/api/v3';
    }

    // Ambil data harga koin berdasarkan ID
    async getCoinPrice(coinId = 'bitcoin') {
        try {
            const response = await axios.get(`${this.apiUrl}/simple/price?ids=${coinId}&vs_currencies=usd`);
            return response.data;
        } catch (error) {
            console.error('Error fetching coin price:', error);
            throw error;
        }
    }
}

// Ekspor class CoinModel dengan default
export default CoinModel;