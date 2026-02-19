document.getElementById('coinForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const ticker = document.getElementById('ticker').value.toLowerCase(); // Ambil input ticker dan ubah menjadi huruf kecil
  const resultDiv = document.getElementById('result');
  
  try {
    const response = await fetch(`/price/${ticker}`);  // Kirim permintaan ke server dengan ticker
    const data = await response.json();

    if (response.ok) {
      resultDiv.textContent = `Harga ${ticker.toUpperCase()}: $${data.price}`;
    } else {
      resultDiv.textContent = data.error || 'Gagal mengambil data harga.';
    }
  } catch (error) {
    resultDiv.textContent = 'Terjadi kesalahan saat mengambil data.';
  }
});
