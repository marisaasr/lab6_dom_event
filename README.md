
# LAPORAN PRAKTIKUM PEMROGRAMAN WEB
## JavaScript DOM dan Event Handling

### Identitas Mahasiswa
- Nama: Marisa Puspita Sari
- NIM : 312510011
- Program Studi: Teknik Informatika
- Universitas: Universitas Pelita Bangsa
- Mata Kuliah: Pemrograman Web
- Materi: JavaScript DOM dan Event Handling

---

## A. Tujuan Praktikum

1. Memahami konsep Document Object Model (DOM).
2. Mempraktikkan manipulasi elemen HTML menggunakan JavaScript.
3. Memahami penggunaan event handling.
4. Membuat validasi form menggunakan JavaScript.
5. Membuat aplikasi interaktif sederhana.

---

## B. Tools yang Digunakan

- Visual Studio Code
- HTML
- CSS
- JavaScript
- Google Chrome
- Git dan GitHub

---

## C. Struktur Folder

```text
lab6_dom_event/
│
├── index.html
├── style.css
├── script.js
│
├── workshop.html
├── workshop.css
├── workshop.js
│
└── README.md
```

---

## D. Langkah Kerja Praktikum

### Latihan 1 – Mengubah Teks dengan DOM
Menggunakan `getElementById()` dan `textContent` untuk mengubah judul dan isi paragraf HTML.

### Latihan 2 – Event Click
Menggunakan `addEventListener("click")` untuk menjalankan fungsi ketika tombol diklik.

### Latihan 3 – Mengubah Class dan Style CSS
Menggunakan `classList.toggle()` untuk menambah dan menghapus class CSS pada elemen.

### Latihan 4 – Event Input dan Penghitung Karakter
Menggunakan event `input` dan properti `value.length` untuk menghitung jumlah karakter secara otomatis.

### Latihan 5 – Validasi Form
Menggunakan event `submit`, `preventDefault()`, dan `trim()` untuk memeriksa input nama.

### Latihan 6 – To-do List
Membuat aplikasi daftar tugas dengan fitur menambah dan menghapus tugas menggunakan manipulasi DOM.

---

## E. Mini Project – Form Pendaftaran Workshop

Mini project ini merupakan aplikasi pendaftaran workshop sederhana menggunakan HTML, CSS, dan JavaScript.

Fitur yang dibuat:
1. Input nama lengkap.
2. Input alamat email.
3. Pilihan workshop.
4. Validasi input sebelum pendaftaran.
5. Menampilkan pesan berhasil atau gagal.
6. Reset form setelah pendaftaran berhasil.

---

## F. Pertanyaan Evaluasi dan Jawaban

### 1. Apa yang dimaksud dengan DOM dan apa manfaatnya?

DOM (Document Object Model) adalah representasi struktur dokumen HTML dalam bentuk objek yang dapat diakses oleh JavaScript.

Manfaat DOM adalah memungkinkan JavaScript membaca, mengubah, menambahkan, dan menghapus elemen HTML serta mengatur tampilan halaman website secara dinamis.

### 2. Apa perbedaan getElementById(), querySelector(), dan querySelectorAll()?

- `getElementById()` digunakan untuk memilih elemen berdasarkan atribut ID.
- `querySelector()` digunakan untuk memilih elemen pertama yang sesuai dengan selector CSS.
- `querySelectorAll()` digunakan untuk memilih semua elemen yang sesuai dengan selector CSS.

### 3. Apa fungsi addEventListener() dan sebutkan tiga contoh event?

`addEventListener()` berfungsi untuk menambahkan event listener pada elemen HTML sehingga JavaScript dapat menjalankan fungsi ketika suatu kejadian berlangsung.

Contoh event:
- `click`: ketika elemen diklik.
- `input`: ketika pengguna mengetik atau mengubah input.
- `submit`: ketika form dikirim.

### 4. Mengapa event.preventDefault() digunakan pada event submit form?

`event.preventDefault()` digunakan untuk menghentikan perilaku default browser, seperti pengiriman form otomatis atau refresh halaman.

Dengan demikian, JavaScript dapat memeriksa dan memvalidasi data terlebih dahulu sebelum diproses.

### 5. Apa perbedaan textContent dan innerHTML dari sisi penggunaan dan keamanan?

- `textContent` digunakan untuk membaca atau mengubah teks biasa tanpa memproses tag HTML.
- `innerHTML` digunakan untuk membaca atau mengubah isi elemen termasuk struktur HTML.

Dari sisi keamanan, `textContent` lebih aman untuk menampilkan input pengguna karena teks tidak diproses sebagai kode HTML. Penggunaan `innerHTML` dengan data yang tidak dipercaya dapat menyebabkan serangan XSS (Cross-Site Scripting).

### 6. Bagaimana classList.toggle() membantu mengubah tampilan elemen?

`classList.toggle()` digunakan untuk menambahkan class jika belum ada dan menghapus class jika sudah ada.

Dengan cara ini, tampilan elemen dapat berubah secara bergantian ketika pengguna melakukan tindakan seperti mengklik tombol.

### 7. Sebutkan minimal tiga skenario pengujian validasi form.

1. Semua input dikosongkan. Hasil yang diharapkan adalah muncul pesan bahwa semua kolom wajib diisi.
2. Nama diisi tetapi email dikosongkan. Hasil yang diharapkan adalah pendaftaran ditolak.
3. Nama dan email diisi tetapi pilihan workshop belum dipilih. Hasil yang diharapkan adalah muncul pesan kesalahan.
4. Semua input diisi dengan benar. Hasil yang diharapkan adalah muncul pesan pendaftaran berhasil.

---

## G. Kesimpulan

Berdasarkan praktikum JavaScript DOM dan Event Handling, dapat disimpulkan bahwa DOM memungkinkan JavaScript berinteraksi dengan elemen HTML secara dinamis.

Melalui kegiatan praktikum ini, telah dipelajari cara mengubah teks, menangani event, mengubah class CSS, menghitung karakter, melakukan validasi form, dan membuat aplikasi To-do List.

Mini project Form Pendaftaran Workshop juga memberikan pemahaman mengenai penerapan DOM dan event handling dalam pembuatan website interaktif.

---

## H. Repository GitHub

Repository praktikum:
https://github.com/marisaasr/lab6_dom_event

