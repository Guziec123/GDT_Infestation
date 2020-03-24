document.addEventListener("DOMContentLoaded", ()=> {

  let money = localStorage.setItem("money", 0);
    localStorage.setItem("OpontentNum", 0);
  let setLocation = localStorage.setItem("location", "index_03.html");

  let submit = document.getElementById("submit");
  let name = document.getElementById("name");
  let title = document.querySelector(".titles");
  let h3 = document.querySelector("#showName");
  let text = document.querySelector(".mainContent");
  let text2 = document.getElementById("typewriter");
  let animation = document.getElementById("headAnimation");
  let goNext = document.getElementById("goThere");

  let briefText = [
    "Hello ",
    " there was infestation in main building. We need you take care of it. Please be very careful. Cause these wild AGD's are really dangerous."
  ];

  name.onkeyup = () => {
    let name2 = document.getElementById("name").value;
    if (name2 == "") {
        h3.innerHTML = "";
    } else {
        h3.innerHTML = name2;

    }
  };
  submit.addEventListener("click", ()=> {

    let name2 = document.getElementById("name").value;
      localStorage.setItem("PlayerName", name2);
    let showBref = briefText[0] + name2 + briefText[1];

    setTimeout(()=> {
      title.style.display = "none";
      text.style.display = "block";
      animation.style.display = "block";
        let n = 0;
        let str = showBref;
      text2.innerHTML = "";

      setInterval(() => {
        n = n + 1;
          text2.innerHTML = str.slice(0, n);
      }, 80);
    }, 300);

   });

  goNext.addEventListener("click", ()=> {
    location.replace("index_03.html")
  });

});
