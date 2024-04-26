//listeyi secme
const listeElementi = document.getElementById("maddeler");

//ekle butonunu secme
const ekleBtn = document.getElementById("ekle");

//kaldir butonu secme
const kaldirBtn = document.getElementById("kaldir");

//yeni öğe ekleme
ekleBtn.addEventListener("click", function () {
  const yeniOge = document.createElement("li");
  yeniOge.textContent = "Yeni Öğe";
  listeElementi.appendChild(yeniOge);
});

//son öğeyi kaldirma
kaldirBtn.addEventListener("click", function () {
  const sonOge = listeElementi.lastElementChild;
  listeElementi.removeChild(sonOge);
});
