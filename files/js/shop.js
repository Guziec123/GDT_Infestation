document.addEventListener("DOMContentLoaded", ()=> {
  var data = [
    {
      name: "img_1",
      image: "http://nadwoch.pl/wp-content/uploads/2019/10/adintro3.jpg"
    },
    {
      name: "img_2",
      image: "http://nadwoch.pl/wp-content/uploads/2020/01/shop.png"

    },
    {
      name: "img_3",
      image: "http://nadwoch.pl/wp-content/uploads/2019/10/adintro3.jpg"
    },
    {
      name: "img_4",
      image: "http://nadwoch.pl/wp-content/uploads/2019/10/adintro3.jpg"
    },
    {
      name: "img_5",
      image: "http://nadwoch.pl/wp-content/uploads/2020/01/shop.png"

    },
    {
      name: "img_6",
      image: "http://nadwoch.pl/wp-content/uploads/2020/01/shop.png"

    }
  ]
  
  let money = localStorage.getItem("money");
  let localization = localStorage.getItem("location")
  let buy = document.getElementById("buy");
  let checking = false;
  const goBack = document.getElementById("goBack");
  const img1btn = document.getElementById("img1btn");
  const img2btn = document.getElementById("img2btn");
  const img3btn = document.getElementById("img3btn");
  const img4btn = document.getElementById("img4btn");
  const img5btn = document.getElementById("img5btn");
  const img6btn = document.getElementById("img6btn");
  let listOfPhotos = [img1btn, img2btn, img3btn, img4btn, img5btn, img6btn];
  let listOfimgCon = document.getElementsByClassName("galleryImgcontainer");

  //image creation
  function createImg() {
    for (let i = 0; i < data.length; i++) {
      let pic = document.createElement("img");
      let closeX = document.createElement("span");
      closeX.id = data[i].name
      closeX.className = "close"
      closeX.innerHTML = "&times;"
      pic.className = "pic";
      datapic = data[i].image;
      pic.src = datapic;
      listOfimgCon[i].appendChild(closeX)
      listOfimgCon[i].appendChild(pic)
    }

  }
  createImg();
  //disable buy
  
  //moneyyyyyy
  showMoney = document.getElementById("money").innerHTML = money + "$"
  //pointer add 
  function pointerAdd(a, b) {
    a.classList.add("pointerArr")
    b.classList.remove("pointerArr")
  
  }
  //add/remove class on image click
  function pointerAddclick() {
    var thisClick = document.getElementById(this.id);
    thisClick.classList.add("pointerArr")
    let mapPhotos = listOfPhotos.filter(numb => numb != thisClick)
    mapPhotos.map(num => num.classList.remove("pointerArr"))
    return checking = true;
  }
  buy.onclick = function () {
    pointerAdd(buy, goBack)
    //add  image trigger 
    
    function check() {
      let sztosText = document.getElementById("epilog-sztos")
      if (money >= 50 && checking == true) {
        moneyStorage = parseInt(money) - 50;
        money = localStorage.setItem("money", moneyStorage);
        money = localStorage.getItem("money");
        showMoney = document.getElementById("money").innerHTML = moneyStorage + "$";

        ///sztos-text show
        sztosText.style.display = "block";
        setTimeout (()=>{sztosText.style.display="none"; },2000);

        for (var i = 0; i < listOfPhotos.length; i++) {
          if (listOfPhotos[i].classList.contains("pointerArr")) {
            listOfPhotos[i].style.color = "black";
            listOfimgCon[i].style.display = "block";

          }
        }
      }
     
    }
    check();
  }

  //close image
  let closebtns = document.getElementsByClassName("close");
  for (var i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function () {
      this.parentElement.style.display = 'none';
    });
  }

  //goback to previous screen
  goBack.onclick = function () {
    pointerAdd(goBack, buy)
    location.replace(localization)
  }
  //add class onclick
  function addpointerAddClick() {
    listOfPhotos.map(btn => btn.onclick = pointerAddclick)
  }
  addpointerAddClick()


});


