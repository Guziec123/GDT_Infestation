
document.addEventListener("DOMContentLoaded", ()=> {
    var setLocation = localStorage.setItem("location", "openspace.html");
  
    let shop = document.getElementById("shop");
    let elevator = document.getElementById("elevator");
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let go = document.getElementById("go");
    let kitchen = document.getElementById("kitchen");
    let office = document.getElementById("office");
    let directions = [shop,office,kitchen]

    function movingArrows(){
      n = 2
      left.addEventListener("click", ()=>{
        if (n > 0){ 
          n--
          let clasRemoveNum = n+1 
          directions[clasRemoveNum].classList.remove("pointerArr")
          directions[n].classList.add("pointerArr");
          right.classList.remove("pointerArr");
          left.classList.add("pointerArr");
            }
        });

      right.addEventListener('click', ()=>{ 
        if (n < 2){ 
        n ++;
        let clasRemoveNum = n-1 
        directions[clasRemoveNum].classList.remove("pointerArr")
        directions[n].classList.add("pointerArr");
        left.classList.remove("pointerArr");
        right.classList.add("pointerArr");
          }
      });
    }
    movingArrows();

  
       go.addEventListener("click", ()=>{
        if(kitchen.classList.contains("pointerArr")){ location.replace("kitchen.html")}
        if(office.classList.contains("pointerArr")){ location.replace("office.html")}
        if(shop.classList.contains("pointerArr")){ location.replace("shop.html")}
       });
  });
  