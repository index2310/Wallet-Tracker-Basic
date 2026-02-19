const axios = require('axios');

// Mendapatkan semua dompet dari API
function getAllWallets() {
    axios.get('/api/wallets')
        .then(response => {
            const wallets = response.data;
            renderWallets(wallets);
        })
        .catch(error => console.error("Error fetching wallets:", error));
}

// Render data dompet ke HTML
function renderWallets(wallets) {
    const walletsList = document.getElementById('wallets-list');
    walletsList.innerHTML = '';  // Clear sebelumnya
    wallets.forEach(wallet => {
        const walletElement = document.createElement('li');
        walletElement.textContent = `${wallet.name}: ${wallet.balance}`;
        walletsList.appendChild(walletElement);
    });
}

// Fungsi untuk menambah dompet baru
function addNewWallet() {
    const walletData = {
        id: Date.now(),  // Menggunakan timestamp untuk ID unik
        name: document.getElementById('wallet-name').value,
        balance: document.getElementById('wallet-balance').value
    };

    axios.post('/api/wallets', walletData)
        .then(response => {
            console.log('Wallet added:', response.data);
            getAllWallets();  // Refresh daftar setelah ditambahkan
        })
        .catch(error => console.error("Error adding wallet:", error));
}

// Event listener untuk form submit
document.getElementById('wallet-form').addEventListener('submit', (e) => {
    e.preventDefault();
    addNewWallet();
});

document.addEventListener('DOMContentLoaded', () => {
    getAllWallets();
});
