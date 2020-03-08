window.onload = ()=> {
 var data = [
    {
      image: "http://nadwoch.pl/wp-content/uploads/2019/10/adintro3.jpg"
    },
    { image: "http://nadwoch.pl/wp-content/uploads/2019/10/adintro3.jpg"

    }
  ]
  var money = localStorage.getItem("money");
  let buy = document.getElementById("buy");
  const goBack  = document.getElementById("goBack");
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const img3 = document.getElementById("img3");
  const img4 = document.getElementById("img4");
  const img5 = document.getElementById("img5");
  const img6 = document.getElementById("img6");
  let listOfPhotos = [img1,img2,img3,img4,img5,img6]
  showMoney = document.getElementById("money").innerHTML= money + "$"
  function pointerAdd(a, b){
    a.classList.add("pointerArr")
    b.classList.remove("pointerArr")
  }

  function pointerAddclick(){
     var thisClick = document.getElementById(this.id);
     thisClick.classList.add("pointerArr")
     let mapPhotos = listOfPhotos.filter(numb=>numb!=thisClick)
     mapPhotos.map(num => num.classList.remove("pointerArr"))
  }
  buy.onclick = function (){pointerAdd(buy, goBack)
    
    function check(){
      for(var i = 0; i < listOfPhotos.length; i++ ){
      if(listOfPhotos[i].classList.contains("pointerArr")){
        listOfPhotos[i].style.color = "black";
          }
        }    
      }
      check();
 
  }
  goBack.onclick = function(){pointerAdd(goBack, buy) 
    location.replace("hall.html")
  }
  img1.onclick = pointerAddclick;
  img2.onclick = pointerAddclick;
  img3.onclick = pointerAddclick;
  img4.onclick = pointerAddclick;
  img5.onclick = pointerAddclick;
  img6.onclick = pointerAddclick;
  }