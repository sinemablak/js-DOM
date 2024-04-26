//Baslik elementi secme
const baslikElementi = document.getElementById("baslik");
//Buton elementi secme
const degistirBtn = document.getElementById("degistir");

//Butona tiklaninca metin degistirme
degistirBtn.addEventListener("click", function () {
  baslikElementi.textContent = "Butona tikladin :)";
});
