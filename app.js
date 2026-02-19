// app.js

const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Pemetaan ticker umum ke ID CoinGecko
const tickerMap = {
  btc: 'bitcoin',
  eth: 'ethereum',
  ada: 'cardano',
  xrp: 'ripple',
  doge: 'dogecoin',
  ltc: 'litecoin',
  sol: 'solana',      // Solana
  link: 'chainlink',  // Chainlink
  matic: 'polygon',   // Polygon (MATIC)
  bnb: 'binancecoin', // Binance Coin (BNB)
  dot: 'polkadot',    // Polkadot (DOT)
  trx: 'tron',        // TRON (TRX)
  uni: 'uniswap',     // Uniswap (UNI)
  shiba: 'shiba-inu', // Shiba Inu
  veti: 'vet',        // VeChain (VET)
  etc: 'ethereum-classic', // Ethereum Classic (ETC)
  // Tambahkan pemetaan lainnya sesuai kebutuhan
};

// Endpoint untuk mendapatkan harga koin dari CoinGecko
app.get('/price/:coin', async (req, res) => {
  const coinTicker = req.params.coin.toLowerCase(); // Ubah menjadi huruf kecil
  
  // Periksa apakah ticker valid dan ada dalam pemetaan
  const coinId = tickerMap[coinTicker] || coinTicker;  // Gunakan pemetaan atau tetap menggunakan input asli
  
  try {
    // Ambil harga koin dari API CoinGecko
    const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`);
    
    if (response.data[coinId]) {
      res.json({ price: response.data[coinId].usd });
    } else {
      res.status(404).json({ error: 'Coin tidak ditemukan' });
    }
  } catch (error) {
    console.error("Error fetching price from CoinGecko:", error);  // Log error di server
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data' });
  }
});

// Menyajikan file static (HTML, CSS, JS) dari folder 'public'
app.use(express.static('public'));

// Server Express
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});