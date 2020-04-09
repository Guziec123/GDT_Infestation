document.addEventListener("DOMContentLoaded", () => {

  let litery = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];




  ///show letters 
  function showLetters(letters) {
    return `
          <div  class="letters" id="${letters}">${letters}</div> `;
  }

  document.getElementById("alfabet").innerHTML = `
        ${litery.map(showLetters).join("")}`;

  //typed password

  let letters = document.getElementsByClassName("letters");
  let typed = [];
  let typedJoin = typed.join("")

  //show password
  let clear = document.getElementById("clear");

  let word = document.getElementById("word");
  let push_letters = document.querySelectorAll(".letters");
  function pushing_letters(event) {
    typed.push(this.id);
    word.innerHTML = typed.join("")
  }

  for (var i = 0; i < push_letters.length; i++) {
    push_letters[i].onclick = pushing_letters;

  }
  clear.addEventListener("click", () => {
    typed = [];
    word.innerHTML = "";
  })

  ///check password
  let checked = document.getElementById("checked");
  checked.addEventListener("click", () => {
    let pass = "FAREWELL"
    let all = document.getElementById("panel");
    let attackAni = document.querySelector(".attackAnimation");
    typedJoin = typed.join("");

    if (typedJoin == pass) {
      word.classList.add("accept")

      function hide_and_show() {
    
          setTimeout(() => {
            
            all.style.display = "none";
            attackAni.style.display = "block";
            setTimeout(() => {
              location.replace("index_04.html");
            },2500)
          }, 1000);
        }
      
      hide_and_show()


    
      //setTimeout( ()=>{location.replace("index_04.html")},1000)
    }
    else {

      word.classList.add("wrong")
      setTimeout(() => word.classList.remove("wrong"), 1000)
    }

  })
  let back = document.getElementById("goback_Boss")
  back.addEventListener("click", ()=>{
    location.replace("office.html")
  },1000)

});


