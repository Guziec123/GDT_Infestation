document.addEventListener("DOMContentLoaded", ()=> {
    var setLocation = localStorage.setItem("location", "kitchen.html");
    var local = parseInt(localStorage.getItem("OpontentNum"));
    
    let all = document.getElementById("maininner");
    let attackAni = document.querySelector(".attackAnimation");
    let shop = document.getElementById("shop");
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    var epilog = document.getElementById("epilog");
    let imgOverlay = document.querySelector('.imgOverlay');
    let shelfleft = document.querySelector(".leftShelf");
    let shelfright = document.querySelector(".rightShelf");
    let dialog = document.getElementById("dialog");
    let password = document.getElementById("password");
    let openspace = document.getElementById("openspace")
    let closebtn = document.getElementById("close");
    let passShow = document.getElementById("passShow");

  ///typing effect
    setTimeout(() => {
      var n = 0;
      var str = "You hear strange noise coming from behind...";
  
      setInterval(() => {
        n = n + 1;
        epilog.innerHTML = str.slice(0, n);
      }, 80);
    }, 300);
  
  //hide animation
    function hide_and_show() {
      if (local == 3) {
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
        }, 6000);
      }
    }
    hide_and_show();

    let directions = [shop,password,openspace]

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
    
    //close password
    
      closebtn.addEventListener('click', ()=>{
        
        passShow.style.display="none";
      })
    


    //location replace
    go.onclick = ()=> {
      if(openspace.classList.contains("pointerArr")){ location.replace("openspace.html")}
      if(shop.classList.contains("pointerArr")){ location.replace("shop.html")}
      if(password.classList.contains("pointerArr")){ passShow.style.display="block"}
    }
  });
  