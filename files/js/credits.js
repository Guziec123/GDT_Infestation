

document.addEventListener("DOMContentLoaded", function main() {
  let epilog = document.getElementById("epilog");
  setTimeout(() => {
    var n = 0;
    var str = "You defeted the Evil Robert Bosch and save GDT mission complete<br> <br>THANKS FOR PLAYING AND EVERYTHING..."
    setInterval(() => {
      n = n + 1;
      epilog.innerHTML = str.slice(0, n);
    }, 80);
  }, 300);
  function showImg() {
     let epilogImg = document.getElementById("epilog-img")
    setTimeout(() => {
      let pic = document.createElement("img");
      pic.classList.add("lastImg")
      pic.src="img/chalka.jpg"
      epilogImg.appendChild(pic)
    }, 9500)
  }
  showImg()
});