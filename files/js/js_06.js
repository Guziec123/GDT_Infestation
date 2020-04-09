
document.addEventListener("DOMContentLoaded", ()=> {
  //variables
  let count = document.getElementById("count");
  let overlay = document.getElementById("overlay");
  let image = document.getElementById("image");
  let yes = document.getElementById("yes");
  let no = document.getElementById("no");
  let counter = 10;
  let countdown = setInterval(function() {
    counter--;
    count.innerHTML = counter;
    if (counter === 0) {
       overlay.style.display = "block";
       setTimeout(()=>{
            location.replace("../start.html");
           },3000
       );
      
      clearInterval(countdown);
  
    }
    yes.onclick = ()=>{
      clearInterval(countdown);
      image.style.animation = "continue";
      image.style.width = "100%";
      image.style.height = "250px";
      image.style.background= 'url("http://nadwoch.pl/wp-content/uploads/2019/12/game_over-kopia4.png")';
      setTimeout(()=>{
      location.replace("index_04.html")
      },2000);
                  }
      no.onclick = ()=>{
      clearInterval(countdown);
      image.style.animation = "continue";
      overlay.style.display = "block";
      setTimeout(function(){
          
           location.replace("../start.html");
       
      },2000);
     
                  }
     
  }, 1500);
});
