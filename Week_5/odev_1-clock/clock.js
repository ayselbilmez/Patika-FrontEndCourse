//kullanicidan isim alma
let userName = prompt("Lütfen isminizi giriniz:");
document.getElementById("myName").innerText = userName;

// Saat fonksiyonu
function showTime() {
  const myClock = document.getElementById("myClock");
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Tek haneli sayıları çift haneli yapmak için
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Gün ismini almak için
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  const dayName = days[now.getDay()];

  myClock.innerHTML = `${hours}:${minutes}:${seconds} ${dayName}`;
}

// Her saniyede bir güncellemek icin interval ayarlama
setInterval(showTime, 1000);
showTime();
