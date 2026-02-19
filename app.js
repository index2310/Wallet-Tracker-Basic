import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import WalletController from './controllers/WalletController.js';  // Pastikan jalur relatif ini benar

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')));

// Route API untuk dompet
app.get('/api/wallets', WalletController.getAllWallets);
app.post('/api/wallets', WalletController.addWallet);
app.delete('/api/wallets/:id', WalletController.deleteWallet);
app.put('/api/wallets/:id', WalletController.updateWallet);

// Route API untuk melacak harga crypto
app.get('/api/crypto/:cryptoSymbol', WalletController.getCryptoPrice);

app.listen(port, () => {
    console.log(`Wallet Tracker is running on port ${port}`);
});