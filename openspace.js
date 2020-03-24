
document.addEventListener("DOMContentLoaded", ()=> {
    var setLocation = localStorage.setItem("location", "openspace.html");
  
    let shop = document.getElementById("shop");
    let elevator = document.getElementById("elevator");
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let go = document.getElementById("go");
    let kitchen = document.getElementById("kitchen");
  
    function pointerAdd(a, b, c, d) {
      a.classList.add("pointerArr");
      b.classList.remove("pointerArr");
      c.classList.add("pointerArr");
      d.classList.remove("pointerArr");
    }
    
    right.addEventListener("click", ()=>{
      pointerAdd(right, left, kitchen, shop);
    });
  
    left.addEventListener("click", ()=>{
      pointerAdd(left, right, shop, kitchen);
    });
  
    document.onkeydown = function(event) {
      switch (event.keyCode) {
        case 37:
          right.classList.remove("pointerArr");
          left.classList.add("pointerArr");
          kitchen.classList.remove("pointerArr");
          shop.classList.add("pointerArr");
          right.focus();
          break;
  
        case 39:
          left.classList.remove("pointerArr");
          right.classList.add("pointerArr");
          shop.classList.remove("pointerArr");
          kitchen.classList.add("pointerArr");
          left.focus();
          break;
      }
    };
  
       go.addEventListener("click", ()=>{
        if(kitchen.classList.contains("pointerArr")){ location.replace("kitchen.html")}
        if(shop.classList.contains("pointerArr")){ location.replace("shop.html")}
       });
  });
  