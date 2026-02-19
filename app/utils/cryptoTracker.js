import axios from 'axios';

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';

// Fungsi untuk mendapatkan harga cryptocurrency berdasarkan simbol (misalnya 'bitcoin', 'ethereum')
export const getCryptoPrice = async (cryptoSymbol) => {
    try {
        const response = await axios.get(`${COINGECKO_API_URL}/simple/price`, {
            params: {
                ids: cryptoSymbol,
                vs_currencies: 'usd',
            },
        });
        // Menyaring harga dari data yang diterima
        const price = response.data[cryptoSymbol]?.usd;
        if (price) {
            return price;  // Mengembalikan harga dalam USD
        } else {
            throw new Error('Crypto not found');
        }
    } catch (error) {
        console.error('Error fetching crypto price:', error);
        return null;  // Mengembalikan null jika terjadi error
    }
};