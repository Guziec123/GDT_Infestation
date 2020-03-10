window.onload = () => {
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
    }
  ]
  var money = localStorage.getItem("money");
  let buy = document.getElementById("buy");

  const goBack = document.getElementById("goBack");
  const img1btn = document.getElementById("img1btn");
  const img2btn = document.getElementById("img2btn");
  const img3btn = document.getElementById("img3btn");
  const img4btn = document.getElementById("img4btn");
  const img5btn = document.getElementById("img5btn");
  const img6btn = document.getElementById("img6btn");
  var img1 = document.getElementById("img1");
  var img2 = document.getElementById("img2");
  var img3 = document.getElementById("img3");
  var img4 = document.getElementById("img4");
  var img_1 = document.getElementById("img_1");
  var img_2 = document.getElementById("img_2");
  var img_3 = document.getElementById("img_3");
  var img_4 = document.getElementById("img4_");
  let listOfPhotos = [img1btn, img2btn, img3btn, img4btn, img5btn, img6btn]
  let listOfimgCon = [img1, img2, img3, img4]
  

  //image creation
  function createImg() {
    for (let i = 0; i < data.length; i++) {
      var pic = document.createElement("img");
      var closeX = document.createElement("span");
      closeX.id = data[i].name
      closeX.className = "close"
      closeX.innerHTML = "X"
      pic.className = "pic";
      datapic = data[i].image;
      pic.src = datapic;
      listOfimgCon[i].appendChild(closeX)
      listOfimgCon[i].appendChild(pic)
    }
  }
  createImg()
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
  }
  buy.onclick = function () {
    pointerAdd(buy, goBack)
    //add  image trigger 
    function check() {
      for (var i = 0; i < listOfPhotos.length; i++) {
        if (listOfPhotos[i].classList.contains("pointerArr")) {
          listOfPhotos[i].style.color = "black";
          listOfimgCon[i].style.display = "block";
        }
      }
    }
    check();

  }
  closeTable = [img_1,img_2,img_3,img_4]
  closeBtn = function () { for(var i = 0; i<closeTable[i]; i++){
    test = "img_"+[i]
    
    return document.getElementById(test)
    }
   
  }
  closeBtn.onclick =  function close(){
    this.style.display = "none"
   }

  //close image
  
   

  //goback to previous screen
  goBack.onclick = function () {
    pointerAdd(goBack, buy)
    location.replace("hall.html")
  }
  //add class onclick
  function addpointerAddClick() {
    listOfPhotos.map(btn => btn.onclick = pointerAddclick)
  }
  addpointerAddClick()

}