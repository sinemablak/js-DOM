// Listeyi seçme
const listeElementi = document.getElementById("maddeler");

// Ekle butonunu seçme
const ekleButonu = document.getElementById("ekle");

// Kaldır butonunu seçme
const kaldirButonu = document.getElementById("kaldir");

// Yeni öğe ekleme
ekleButonu.addEventListener("click", function () {
  const yeniOge = document.createElement("li");
  yeniOge.textContent = "Yeni Öğe";
  listeElementi.appendChild(yeniOge);
});

// Son öğeyi kaldırma
kaldirButonu.addEventListener("click", function () {
  const sonOge = listeElementi.lastElementChild;
  listeElementi.removeChild(sonOge);
});
