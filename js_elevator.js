window.onload = function main() {
    var setLocation = localStorage.setItem("location", "hall.html");
    var local = parseInt(localStorage.getItem("OpontentNum"));
    let shop = document.getElementById("shop");
    let elevator = document.getElementById("elevator");
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let go = document.getElementById("go");
    var epilog = document.getElementById("epilog");
    let all = document.getElementById("maininner");
    let attackAni = document.querySelector(".attackAnimation");
    function hide_and_show() {
      if (local == 2) {
        alert("jest");
        left.disabled = false;
        right.disabled = false;
      }
      else {
      setTimeout(() => {
        epilog.style.display = "none";
        all.style.display = "none";
        attackAni.style.display = "block";
        left.disabled = true;
        right.disabled = true;
        go.disabled= true;
        setTimeout(() => {
          location.replace("index_04.html");
        }, 2500)
      }, 4000);
      }
    }
    hide_and_show()
    

    function pointerAdd(a, b, c, d) {
      a.classList.add("pointerArr");
      b.classList.remove("pointerArr");
      c.classList.add("pointerArr");
      d.classList.remove("pointerArr");
    }

    right.onclick = function() {
      pointerAdd(right, left, elevator, shop);
    };
    left.onclick = function() {
      pointerAdd(left, right, shop, elevator);
    };
    document.onkeydown = function(event) {
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
    };
     //redirection after click
     go.onclick = ()=> {
      if(right.classList.contains("pointerArr")){ location.replace("elevetor.html")}
      if(left.classList.contains("pointerArr")){ location.replace("shop.html")}
    }
  };
  