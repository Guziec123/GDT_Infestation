window.onload = ()=> {
  
  const buy = document.getElementById("shop");
  const goBack  = document.getElementById("goBack");
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const img3 = document.getElementById("img3");
  const img4 = document.getElementById("img4");
  const img5 = document.getElementById("img5");
  const img6 = document.getElementById("img6");
  function pointerAdd(a, b){
    a.classList.add("pointerArr")
    b.classList.remove("pointerArr")
  }
  goBack.onclick = ()=>{location.replace("")}
  function pointerAddclick(){
     var thisClick = document.getElementById(this.id);
     thisClick.classList.add("pointerArr")
     let listOfPhotos = [img1,img2,img3,img4,img5,img6]
     let mapPhotos = listOfPhotos.filter(numb=>numb!=thisClick)
     mapPhotos.map(num => num.classList.remove("pointerArr"))
  }
  buy.onclick = function (){pointerAdd(buy, goBack)
  }
  goBack.onclick = function(){pointerAdd(goBack, buy) 
  }
  img1.onclick = pointerAddclick;
  img2.onclick = pointerAddclick;
  img3.onclick = pointerAddclick;
  img4.onclick = pointerAddclick;
  img5.onclick = pointerAddclick;
  img6.onclick = pointerAddclick;
  }
  