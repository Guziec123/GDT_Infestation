window.onload = function main() {
    var local = parseInt(localStorage.getItem("OpontentNum"));
    let all = document.getElementById("maininner");
    let attackAni = document.querySelector(".attackAnimation");
    let shop = document.getElementById("shop");
    let elevator = document.getElementById("elevator");
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    var epilog = document.getElementById("epilog");
    let imgOverlay = document.querySelector('.imgOverlay');
  
    setTimeout(function() {
      var n = 0;
      var str = " You enter the GDT and it seems oddly quiet .... too quiet... ";
  
      setInterval(function() {
        n = n + 1;
        epilog.innerHTML = str.slice(0, n);
      }, 80);
    }, 300);
  
    function hide_and_show() {
      if (local == 1) {
        epilog.style.display="none";
        imgOverlay.style.top="370px";
      } else {
        //button disable
        left.disabled = true;
        right.disabled = true;
        //fride enter
        setTimeout(function() {
          epilog.style.display = "none";
          all.style.display = "none";
          attackAni.style.display = "block";
          location.replace("index_04.html"
        }, 8000);
      }
    }
    hide_and_show();
  
    
  
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
  };
  