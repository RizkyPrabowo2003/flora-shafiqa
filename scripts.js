// scripts.js
document.getElementById('confessButton').addEventListener('click', function() {
    const confessElement = document.getElementById('confess');
    const imageContainer = document.getElementById('imageContainer');
    const button = document.getElementById('confessButton');

    // Tampilkan bagian confess dan gambar
    confessElement.classList.remove('hidden');
    imageContainer.classList.remove('hidden');

    // Sembunyikan tombol setelah diklik
    button.style.display = 'none';

    // Mengambil semua elemen teks confess
    const confessTexts = document.querySelectorAll('.confess-text');

    // Menambahkan animasi delay untuk setiap teks confess
    confessTexts.forEach((text, index) => {
        text.style.setProperty('--delay', `${index * 1}s`);
        text.classList.add('animated');
    });
});
