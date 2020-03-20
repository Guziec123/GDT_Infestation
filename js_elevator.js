document.addEventListener("DOMContentLoaded", ()=> {
  var setLocation = localStorage.setItem("location", "elevator.html");
  var local = parseInt(localStorage.getItem("OpontentNum"));
  
  let all = document.getElementById("maininner");
  let attackAni = document.querySelector(".attackAnimation");
  let shop = document.getElementById("shop");
  let elevator = document.getElementById("elevator");
  let left = document.getElementById("left");
  let right = document.getElementById("right");
  var epilog = document.getElementById("epilog");
  let imgOverlay = document.querySelector('.imgOverlay');
  let shelfleft = document.querySelector(".leftShelf");
  let shelfright = document.querySelector(".rightShelf");
  let dialog = document.getElementById("dialog");
  setTimeout(() => {
    var n = 0;
    var str = " Something is wrong.... ";

    setInterval(() => {
      n = n + 1;
      epilog.innerHTML = str.slice(0, n);
    }, 80);
  }, 300);

//hide animation
  function hide_and_show() {
    if (local == 2) {
      epilog.style.display = "none";
      imgOverlay.style.top = "370px";
      left.disabled = false;
      right.disabled = false;
    } else {
      //button disable
      shelfright.style.display = "none";
      shelfleft.style.display = "none";
      dialog.style.display = "none";
      left.style.display = "none";
      right.style.display = "none";
      left.disabled = true;
      right.disabled = true;
      //fride enter
      setTimeout(() => {
        epilog.style.display = "none";
        all.style.display = "none";
        attackAni.style.display = "block";
        setTimeout(() => {
          location.replace("index_04.html");
        }, 2500)
      }, 4000);
    }
  }
  hide_and_show();
//declaration of buttons function
  function pointerAdd(a, b, c, d) {
    a.classList.add("pointerArr");
    b.classList.remove("pointerArr");
    c.classList.add("pointerArr");
    d.classList.remove("pointerArr");
  }
//movement of arrows
  right.onclick = () => {
    pointerAdd(right, left, elevator, shop);
  };
  left.onclick = () => {
    pointerAdd(left, right, shop, elevator);
  };
  document.onkeydown = (event) => {
    switch (event.keyCode) {
      case 37:
        right.classList.remove("pointerArr");
        left.classList.add("pointerArr");
        elevator.classList.remove("pointerArr");
        shop.classList.add("pointerArr");
        right.focus();
        break;

      case 39:
        left.classList.remove("pointerArr");
        right.classList.add("pointerArr");
        shop.classList.remove("pointerArr");
        elevator.classList.add("pointerArr");
        left.focus();
        break;
    }
  }
  //location replace
  go.onclick = ()=> {
    if(right.classList.contains("pointerArr")){ location.replace("hall.html")}
    if(left.classList.contains("pointerArr")){ location.replace("shop.html")}
  }
});
