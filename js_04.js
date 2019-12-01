window.onload = function main() {
    //enter data 
    var data = [
        {

            name: "The Fridge",
            image: "http://nadwoch.pl/wp-content/uploads/2019/11/fringe-kopia-e1573078821899.png",
            specialAttack: "",
            hp: 70,
            hp2: 100,
            page: "index_03.html"

        },
        {
            name: "Wild MicroWave",
            image: "http://nadwoch.pl/wp-content/uploads/2019/11/microwave-kopia-1-kopia.png",
            specialAttack: "",
            hp: 90,
            hp2: 100
        },
        {
            name: "person3",
            image: "//static.pokemonpets.com/images/monsters-images-300-300/2025-Shiny-Pikachu.png",
            specialAttack: "",
            hp: 100,
            hp2: 100
        }
    ];
    //variables 

    var enemyNumber = localStorage.getItem("OpontentNum");

    let playerName = document.getElementById("playerName").innerHTML = localStorage.getItem("PlayerName");
    let overlay = document.getElementById("overlay");
    let overlayH1 = document.getElementById("overlayH1");
    let enemyName = (document.querySelector(".nameEnemy").innerHTML =
        data[enemyNumber].name);
    let enemyImage = (document.querySelector(".imageEnemy>img").src =
        data[enemyNumber].image);
    let enemyHealth = (document.querySelector(".barProgresEnemy").style.width =
        data[enemyNumber].hp + "%");
    let attack = document.getElementById("attack");
    let attack2 = document.getElementById("attack2");
    let playerBar = document.querySelector(".barProgresPlayerInner");
    let pointer = document.querySelector(".pointerArr");
    let enemyBar = document.querySelector(".barProgresEnemyInner");
    let imageEnemy = document.querySelector(".imageEnemy>img");
    let imagePlayer = document.querySelector(".playerPic>img");
    let barEnterWidth = data[enemyNumber].hp;
    let barEnterWidthInner = data[enemyNumber].hp2;

    //start focus on first button
    pointer.focus();

    //close overlay
    overlay.onclick = function closeOverlay() {

        let enemyImage = (document.querySelector(".imageEnemy>img").src =
            data[enemyNumber].image);
        let enemyName = (document.querySelector(".nameEnemy").innerHTML =
            data[enemyNumber].name);
        setTimeout(function () { overlay.style.display = "none"; }, 200);
    }
    //counter attack prototype 
    function couterAttack() {

        let enemyName = (document.querySelector(".nameEnemy").innerHTML =
            data[enemyNumber].name);
        let enemyImage = (document.querySelector(".imageEnemy>img").src =
            data[enemyNumber].image);
        let enemyHealth = (document.querySelector(".barProgresEnemy").style.width =
            data[enemyNumber].hp + "%");
        barEnterWidthInner = barEnterWidthInner - 5;
        console.log(barEnterWidthInner)
        playerBar.style.width = barEnterWidthInner + "%";
        imagePlayer.classList.add("shake");

        setTimeout(function () {
            imagePlayer.classList.remove("shake");
            attack.disabled = false;
            attack2.disabled = false;
        }, 650);

        if (enemyBar.style.width == 0 + "%") {
            overlay.style.display = "block";
            overlayH1.innerHTML = "You Defeted" + " " + data[enemyNumber].name;
            enemyNumber = parseInt(enemyNumber) + 1;
            var oponentSes = enemyNumber;
            localStorage.setItem("OpontentNum", oponentSes);
            console.log(enemyNumber)
            console.log(localStorage.getItem("OpontentNum"));
            playerBar.style.width = 100 + "%";
            barEnterWidthInner = data[enemyNumber].hp2;
            enemyBar.style.width = data[enemyNumber].hp2 + "%";
            setTimeout(function () {
                location.replace(data[enemyNumber - 1].page);
            }, 1000);

        }

        else if (playerBar.style.width == 0 + "%") {
            overlay.style.display = "block";
            overlayH1.innerHTML = "You Lost"
            location.replace();
        }
        else {

        }
    }
    // Attack with first button 
    attack.onclick = function () {
        attack.disabled = true;
        attack2.disabled = true;
        imageEnemy.classList.add("shake");
        barEnterWidthInner = barEnterWidthInner - 10;
        enemyBar.style.width = barEnterWidthInner + "%";

        setTimeout(function () {
            imageEnemy.classList.remove("shake");

        }, 850);
        setTimeout(function () {
            couterAttack();
        }, 2500);
    };
    // Attack with second button 
    attack2.onclick = function () {
        attack.disabled = true;
        attack2.disabled = true;
        imageEnemy.classList.add("shake");
        barEnterWidthInner = barEnterWidthInner - 15;
        enemyBar.style.width = barEnterWidthInner + "%";
        setTimeout(function () {
            imageEnemy.classList.remove("shake");
        }, 850);
        setTimeout(function () {
            couterAttack();
        }, 2500);
    };
    //moving across buttons 
    document.onkeydown = function (event) {
        switch (event.keyCode) {
            case 37:
                attack2.classList.remove("pointerArr");
                attack.classList.add("pointerArr");
                attack.focus();
                break;

            case 39:
                attack.classList.remove("pointerArr");
                attack2.classList.add("pointerArr");
                attack2.focus();
                break;
        }
    };
};
