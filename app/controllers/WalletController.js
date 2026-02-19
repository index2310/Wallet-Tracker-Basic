import { getCryptoPrice } from '../utils/cryptoTracker.js';

class WalletController {
    // Simulasi data dompet
    getAllWallets(req, res) {
        const wallets = [
            { id: 1, name: 'My Wallet', balance: 1000 },
            { id: 2, name: 'Savings', balance: 5000 }
        ];
        res.json(wallets);
    }

    addWallet(req, res) {
        const newWallet = req.body;
        res.status(201).json(newWallet);
    }

    deleteWallet(req, res) {
        const walletId = req.params.id;
        res.status(204).send();  // Menghapus wallet berdasarkan ID
    }

    updateWallet(req, res) {
        const walletId = req.params.id;
        const updatedData = req.body;
        res.json(updatedData);
    }

    // Fungsi untuk mendapatkan harga crypto
    async getCryptoPrice(req, res) {
        const { cryptoSymbol } = req.params;
        const price = await getCryptoPrice(cryptoSymbol);

        if (price !== null) {
            res.json({ symbol: cryptoSymbol, price: price });
        } else {
            res.status(404).json({ message: 'Crypto not found' });
        }
    }
}

export default new WalletController();