
document.addEventListener("DOMContentLoaded", ()=> {
    var setLocation = localStorage.setItem("location", "office.html");
  
    
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let go = document.getElementById("go");
    let goback = document.getElementById("goback");
    let boss = document.getElementById("boss");
    let shop = document.getElementById("shop");
    let directions = [shop,boss,goback];
    function movingArrows(){
       
      n = 2
      left.addEventListener("click", ()=>{
        if (n > 0){ 
          n--
          let clasRemoveNum = n+1 ;
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
        if(goback.classList.contains("pointerArr")){ location.replace("openspace.html")}
        if(boss.classList.contains("pointerArr")){ location.replace("boss.html")}
        if(shop.classList.contains("pointerArr")){ location.replace("shop.html")}
       });
  });
  