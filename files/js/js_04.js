
document.addEventListener("DOMContentLoaded", function main() {
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
            hp2: 100,
            page: "elevetor.html"
        },
        {
            name: "Washer Machine",
            image: "http://nadwoch.pl/wp-content/uploads/2020/03/washermaichnen.jpg",
            specialAttack: "",
            hp: 100,
            hp2: 100,
            page: "kitchen.html"
        },
        {
            name: "Evil R. Bosch",
            image: "http://nadwoch.pl/wp-content/uploads/2020/03/robert.png",
            specialAttack: "",
            hp: 100,
            hp2: 100,
            page: "credits.html"
        },
        {
            name: "Evil Robert Bosch",
            image: "http://nadwoch.pl/wp-content/uploads/2020/03/robert.png",
            specialAttack: "",
            hp: 100,
            hp2: 100,
            page: "credits.html"
        }
    ];
    //variables 

    var enemyNumber = localStorage.getItem("OpontentNum");
    var money = localStorage.getItem("money");
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
    overlay.onclick = () => {

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
        playerBar.style.width = barEnterWidthInner + "%";
        imagePlayer.classList.add("shake");
        //shake function
        setTimeout(() => {
            imagePlayer.classList.remove("shake");
            attack.disabled = false;
            attack2.disabled = false;
        }, 650);
        //win function 

        if (barEnterWidth <= 0) {
            // if (enemyBar.style.width <= 0 + "%" ) {
            overlay.style.display = "block";
            overlayH1.innerHTML = "You Defeted" + " " + data[enemyNumber].name;
            enemyNumber = parseInt(enemyNumber) + 1;
            var oponentSes = enemyNumber;
            localStorage.setItem("OpontentNum", oponentSes);
            moneyStorage = parseInt(money) + 100;
            money = localStorage.setItem("money", moneyStorage);
            playerBar.style.width = 100 + "%";
            barEnterWidth = data[enemyNumber].hp;
            barEnterWidthInner = data[enemyNumber].hp2;
            enemyBar.style.width = data[enemyNumber].hp2 + "%";


            setTimeout(() => {
                location.replace(data[enemyNumber - 1].page);
            }, 1000);

        }
        //lost function

        else if (playerBar.style.width == 0 + "%") {
            overlay.style.display = "block";
            overlayH1.innerHTML = "You Lost"
            location.replace("continue.html");
        }
        else {

        }
    }


    function randomForceFunc(enterNum){
           let punchForceRan=  Math.random()*enterNum;
           return Math.round(punchForceRan)

            };   
    // Attack with first button 
    attack.onclick = () => {
        attack.disabled = true;
        attack2.disabled = true;
        imageEnemy.classList.add("shake");

        

        barEnterWidth = barEnterWidth - randomForceFunc(12);
        console.log(barEnterWidth)
        enemyBar.style.width = barEnterWidth + "%";


        //remove shake 
        setTimeout(() => {
            imageEnemy.classList.remove("shake");

        }, 850);
        setTimeout(() => {
            couterAttack();
        }, 2500);
    };
    // Attack with second button 
    attack2.onclick = () => {
        attack.disabled = true;
        attack2.disabled = true;
        imageEnemy.classList.add("shake");

        barEnterWidth = barEnterWidth - randomForceFunc(8);
        console.log(barEnterWidth)
        enemyBar.style.width = barEnterWidth + "%";

        setTimeout(() => {
            imageEnemy.classList.remove("shake");
        }, 850);
        setTimeout(() => {
            couterAttack();
        }, 2500);
    };
    //moving across buttons 
    document.onkeydown = (event) => {
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
});
