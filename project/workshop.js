
const formWorkshop = document.getElementById("formWorkshop");

formWorkshop.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("namaWorkshop").value.trim();
    const email = document.getElementById("emailWorkshop").value.trim();
    const pilihan = document.getElementById("pilihanWorkshop").value;

    const hasil = document.getElementById("hasilWorkshop");

    if (nama === "" || email === "" || pilihan === "") {
        hasil.textContent = "Semua kolom wajib diisi!";
        hasil.style.color = "red";
        return;
    }

    hasil.innerHTML = `
        Pendaftaran Berhasil!<br>
        Nama: ${nama}<br>
        Email: ${email}<br>
        Workshop: ${pilihan}
    `;

    hasil.style.color = "green";
    formWorkshop.reset();
});
