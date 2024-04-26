// Kutu elementini seçme
const kutuElementi = document.getElementById("kutum");

// Renk değiştirme butonunu seçme
const renkDegistirBtn = document.getElementById("renkDegistir");

// Renk değiştirme
renkDegistirBtn.addEventListener("click", function () {
  const rastgeleRenk = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
  kutuElementi.style.backgroundColor = rastgeleRenk;
});
