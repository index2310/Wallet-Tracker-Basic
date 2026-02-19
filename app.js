// app.js
import express from 'express';
import path from 'path';
import coinRoutes from './routes/coinRoutes.js'; // Pengimporan yang benar

const app = express();
const port = 3000;

// Middleware untuk memproses data JSON
app.use(express.json());

// Router untuk coin API
app.use('/api', coinRoutes); // Pastikan coinRoutes sudah diekspor dengan default

// Menyajikan view dengan EJS
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views')); // Perbaikan path untuk ES module

// Rute utama untuk menampilkan tampilan harga
app.get('/', (req, res) => {
    res.render('index'); // Menggunakan view index.ejs
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});