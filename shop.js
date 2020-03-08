window.onload = () => {
  var data = [
    {
      name : img1 ,
      image: "http://nadwoch.pl/wp-content/uploads/2019/10/adintro3.jpg"
    },
    {
      name : img2,
      image: "http://nadwoch.pl/wp-content/uploads/2020/01/shop.png"

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
  let listOfPhotos = [img1btn, img2btn, img3btn, img4btn, img5btn, img6btn]
  //image creation
  function createImg(){
    for(var i = 0; i<data.length; i++){
      var img = document.createElement("img");
      img.classname = "galleryImgcontainer";
      var imgbtn= img1btn[i];
      img1btn.appendChild(img)
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

        }
      }
    }
    check();

  }
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


