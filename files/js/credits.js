 
 
 document.addEventListener("DOMContentLoaded", function main() {
 setTimeout(() => {
    var n = 0;
    var str = "You defeted the Evil Robert Bosch and save GDT mission complete<br> <br>THANKS FOR PLAYING AND EVERYTHING...<br> <img src='/img/chalka.jpg'"
    setInterval(() => {
      n = n + 1;
      epilog.innerHTML = str.slice(0, n);
    }, 80);
  }, 300);
});