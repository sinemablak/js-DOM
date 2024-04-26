//Liste elemanini secme
const listeElement = document.querySelector("ul");

//İlk ekle butonunu secme
const ilkEkleBtn = document.getElementById("ilkEkle");

//son ekle butonunu secme
const sonEkleBtn = document.getElementById("sonEkle");

//ilk sil butonunu secme
const ilkSilBtn = document.getElementById("ilkSil");

//Son sil butonunu secme
const sonSilBtn = document.getElementById("sonSil");

//listenin basina öge ekleme
ilkEkleBtn.addEventListener("click", function () {
  const yeniOge = document.createElement("li");
  yeniOge.textContent = "Yeni Öğe Basında";
  listeElement.prepend(yeniOge);
});

//listenin sonuna öge ekleme
sonEkleBtn.addEventListener("click", function () {
  const yeniOge = document.createElement("li");
  yeniOge.textContent = "Yeni Öğe Sonunda";
  listeElement.appendChild(yeniOge);
});

//listenin basindaki ögeyi silme
ilkEkleBtn.addEventListener("click", function () {
  const ilkOge = listeElement.firstElementChild;
  listeElement.removeChild(ilkOge);
});

//listenin sonundaki ögeyi silme
sonSilBtn.addEventListener("click", function () {
  const sonOge = listeElement.lastElementChild;
  listeElement.removeChild(sonOge);
});
