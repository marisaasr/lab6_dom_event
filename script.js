
// LATIHAN 1: Mengubah teks menggunakan DOM

const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";


// LATIHAN 2: Event Click

const tombol = document.getElementById("tombolAksi");

tombol.addEventListener("click", function() {
    pesan.textContent = "Tombol berhasil diklik!";
});


// LATIHAN 3: Mengubah Class dan Style CSS

const tombolStyle = document.getElementById("tombolStyle");

tombolStyle.addEventListener("click", function() {
    document.body.classList.toggle("tampilanBaru");
});


// LATIHAN 4: Event Input dan Penghitung Karakter

const inputPesan = document.getElementById("inputPesan");
const jumlahKarakter = document.getElementById("jumlahKarakter");

inputPesan.addEventListener("input", function() {
    jumlahKarakter.textContent = inputPesan.value.length;
});
