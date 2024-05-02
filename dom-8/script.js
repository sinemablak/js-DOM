// Örnek veri
var meyveler = ["Elma", "Armut", "Muz", "Çilek", "Portakal", "Üzüm"];

// Liste oluşturma fonksiyonu
function listeOlustur() {
  var liste = document.getElementById("liste");
  liste.innerHTML = ""; // Liste içeriğini temizle

  meyveler.forEach(function (meyve) {
    var li = document.createElement("li");
    li.textContent = meyve;
    liste.appendChild(li);
  });
}

// Filtreleme fonksiyonu
function filtrele() {
  var input = document.getElementById("filtreInput");
  var filter = input.value.toUpperCase();
  var ul = document.getElementById("liste");
  var li = ul.getElementsByTagName("li");

  for (var i = 0; i < li.length; i++) {
    var a = li[i];
    var textValue = a.textContent || a.innerText;

    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// Sayfa yüklendiğinde liste oluştur
document.addEventListener("DOMContentLoaded", function () {
  listeOlustur();

  // Filtre inputuna kullanıcı yazı girerken filtrele
  document.getElementById("filtreInput").addEventListener("input", filtrele);
});
