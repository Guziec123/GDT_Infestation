window.onload = function main() {
  let submit = document.getElementById("submit");
  let name = document.getElementById("name");
  let title = document.querySelector(".titles");
  let h3 = document.querySelector("#showName");
  let text = document.querySelector(".mainContent");
  let text2 = document.getElementById("typewriter");

  var briefText = [
    "Hello ",
    " there was infestation in main building. We need you take care of it. Please be very careful. Cause these wild AGD's are really dangerous."
  ];
  name.onkeyup = function() {
    let name2 = document.getElementById("name").value;
    if (name2 == "") {
      h3.innerHTML = "";
    } else {
      h3.innerHTML = name2;
    }
  };
  submit.onclick = function submit(name3) {
    let name2 = document.getElementById("name").value;
    localStorage.setItem("PlayerName", name2);
    console.log(localStorage)
    var showBref = briefText[0] + name2 + briefText[1];
    setTimeout(function() {
      title.style.display = "none";
      text.style.display = "block";
      var n = 0;
      var str = showBref;
      text2.innerHTML = "";
      setInterval(function() {
        n = n + 1;
        text2.innerHTML = str.slice(0, n);
      }, 80);
    }, 300);

  };
};
