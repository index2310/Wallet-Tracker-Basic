class WalletModel {
    constructor() {
        this.wallets = []; // Menyimpan dompet dalam array
    }

    // Menambahkan dompet baru
    addWallet(wallet) {
        this.wallets.push(wallet);
    }

    // Mendapatkan semua dompet
    getAllWallets() {
        return this.wallets;
    }

    // Menghapus dompet berdasarkan id
    deleteWallet(walletId) {
        this.wallets = this.wallets.filter(wallet => wallet.id !== walletId);
    }

    // Mengupdate dompet berdasarkan id
    updateWallet(walletId, newWalletData) {
        const index = this.wallets.findIndex(wallet => wallet.id === walletId);
        if (index !== -1) {
            this.wallets[index] = { ...this.wallets[index], ...newWalletData };
        }
    }
}

module.exports = new WalletModel();
