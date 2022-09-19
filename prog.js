let deck = [
    "img/2_BUB.gif",
    "img/2_CH.gif",
    "img/2_PIK.gif",
    "img/2_TREF.gif",
    "img/3_BUB.gif",
    "img/3_CH.gif",
    "img/3_PIK.gif",
    "img/3_TREF.gif",
    "img/4_BUB.gif",
    "img/4_CH.gif",
    "img/4_PIK.gif",
    "img/4_TREF.gif",
    "img/5_BUB.gif",
    "img/5_CH.gif",
    "img/5_PIK.gif",
    "img/5_TREF.gif",
    "img/6_BUB.gif",
    "img/6_CH.gif",
    "img/6_PIK.gif",
    "img/6_TREF.gif",
    "img/7_BUB.gif",
    "img/7_CH.gif",
    "img/7_PIK.gif",
    "img/7_TREF.gif",
    "img/8_BUB.gif",
    "img/8_CH.gif",
    "img/8_PIK.gif",
    "img/8_TREF.gif",
    "img/9_BUB.gif",
    "img/9_CH.gif",
    "img/9_PIK.gif",
    "img/9_TREF.gif",
    "img/10_BUB.gif",
    "img/10_CH.gif",
    "img/10_PIK.gif",
    "img/10_TREF.gif",
    "img/A_BUB.gif",
    "img/A_CH.gif",
    "img/A_PIK.gif",
    "img/A_TREF.gif",
    "img/J_BUB.gif",
    "img/J_CH.gif",
    "img/J_PIK.gif",
    "img/J_TREF.gif",
    "img/K_BUB.gif",
    "img/K_CH.gif",
    "img/K_PIK.gif",
    "img/K_TREF.gif",
    "img/Q_BUB.gif",
    "img/Q_CH.gif",
    "img/Q_PIK.gif",
    "img/Q_TREF.gif",
];
let refImg = [];
let eightKarts = [];
let refKarts = document.getElementById("karts");
let numFale = document.querySelector("span");
refBtn = document.getElementById("btn");
refBtn.addEventListener("click", newgame);
refTimer = document.getElementById("timer");
let x;
let secs;
let nk = 0;
let nw = 0;
for (let i = 0; i < 16; i++) {
    odnaKarta = document.createElement("img");
    brs = document.createElement("br");
    if (i % 4 == 0) {
        refKarts.appendChild(brs);
    }
    odnaKarta.alt = i;
    odnaKarta.src = "img/5COVER.gif";
    refImg[i] = refKarts.appendChild(odnaKarta);
}

function newgame() {
    refBtn.style.backgroundColor = "#d1d100";
    nw = 0;
    nF = 1;
    nk = 0;
    clearInterval(x);
    secs = 3;
    numFale.innerHTML = 0;
    Shuffle1(deck);
    for (let i = 0; i < 16; i++) {
        refImg[i].removeEventListener("click", f1);
        eightKarts[i] = deck[i];
        if (i % 2 == 1) {
            eightKarts[i] = deck[i - 1];
        }
    }
    Shuffle1(eightKarts);
    for (let i = 0; i < 16; i++) {
        refImg[i].src = eightKarts[i];
    }
    refTimer.innerHTML = "Осталось секунд: " + secs;
    x = setInterval(t, 1000);
}

function t() {
    secs--;
    refTimer.innerHTML = "Осталось секунд: " + secs;
    if (secs == 0) {
        clearInterval(x);
        for (let i = 0; i < 16; i++) {
            refImg[i].src = "img/5COVER.gif";
            refImg[i].addEventListener("click", f1);
        }
        refTimer.innerHTML = "";
    }
}

function f1() {
    nk++;
    refTimer.innerHTML = "";
    if (nk == 1) {
        refImg[this.alt].src = eightKarts[this.alt];
        one = refImg[this.alt];
        one.removeEventListener("click", f1);
    }
    if (nk == 2) {
        refImg[this.alt].src = eightKarts[this.alt];
        two = refImg[this.alt];
        two.removeEventListener("click", f1);
    }
    if (one.src == two.src) {
        nw++;
        one.removeEventListener("click", f1);
        two.removeEventListener("click", f1);
        one = "";
        two = "";
        nk = 0;
    }
    if (nk >= 2 && one.src != two.src) {
        one.addEventListener("click", f1)
        two.addEventListener("click", f1)
        setTimeout(() => {
            one.src = "img/5COVER.gif";
            two.src = "img/5COVER.gif";
            numFale.innerHTML = nF++;
            one = "";
            two = "";
            nk = 0;
        }, 500);
    }
    setTimeout(win, 200);
}

function win() {
    if (nw == 8) {
        refTimer.innerHTML = "Игра окончена!";
        for (let i = 0; i < 16; i++) {
            refImg[i].removeEventListener("click", f1);
        }
        refBtn.style.backgroundColor = "#ffffca";
    }
}