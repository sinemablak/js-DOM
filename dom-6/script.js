// Metin elementini seçme
const metinElementi = document.getElementById("metin");

// Resim elementini seçme
const resimElementi = document.getElementById("resim");

// Metni değiştirme butonunu seçme
const degistirMetinButonu = document.getElementById("degistirMetin");

// Resmi göster/gizle butonunu seçme
const gosterGizleButonu = document.getElementById("gosterGizle");

// Metni değiştirme
degistirMetinButonu.addEventListener("click", function () {
  metinElementi.textContent = "Yeni metin örneği";
  metinElementi.classList.add("degisen");
});

// Resmi göster/gizleme
gosterGizleButonu.addEventListener("click", function () {
  if (resimElementi.classList.contains("gizli")) {
    resimElementi.classList.remove("gizli");
  } else {
    resimElementi.classList.add("gizli");
  }
});
