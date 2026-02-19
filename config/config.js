module.exports = {
    // Konfigurasi untuk port server
    server: {
        port: process.env.PORT || 3000,  // Menggunakan port dari environment variable, atau default ke 3000
    },

    // Konfigurasi untuk database (Jika Anda menggunakan database)
    database: {
        // Contoh konfigurasi untuk MongoDB (sesuaikan jika menggunakan database lain)
        uri: process.env.DB_URI || 'mongodb://localhost:27017/wallet-tracker',  // Default ke MongoDB lokal
    },

    // Pengaturan lainnya yang mungkin berguna
    appName: 'Wallet Tracker',
    environment: process.env.NODE_ENV || 'development',  // Menentukan environment (development, production, dll.)
};
