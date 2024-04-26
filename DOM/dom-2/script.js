//Form elemanini secme
const formElemet = document.getElementById("formum");

//Sonuc alanini secme
const sonuc = document.getElementById("sonuc");

//Form gönderildiginde islem yapma
formElemet.addEventListener("submit", function (evet) {
  evet.preventDefault(); //sayfanin yeniden yüklenmesini engelleme

  const adInput = document.getElementById("ad");
  const ad = adInput.value;

  sonuc.textContent = `Merhaba, ${ad}! form basariyla gönderildi `;
});
