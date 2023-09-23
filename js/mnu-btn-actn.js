function drawOnClick () {
    if (clk%2 == true) {
        nav_mob.style.display = "block";
        mnu_names.forEach((it) => {
            nav_mob.innerHTML += `<div class="nav-elem-m"><p>${it}</p><p>&dArr;</p></div>`;
        });
        clk = false;
    }
    else {
        clk = true;
        nav_mob.innerHTML = "";
    }
}
function launchGame() {
    main_page.innerHTML = `<button class="quit-button">Quit</button>`;
    let tmp1 = document.querySelector(".quit-button");
    tmp1.addEventListener("click", function() {
        window.location.reload();
    });
}
function hidWhenWindow(wdw_match) {
    if (wdw_match.matches) {
        nav_mob.style.display = "block";
    } 
    else {
        nav_mob.style.display = "none";
    }
}
let clk = true;
let main_page = document.querySelector(".main-page");
let wdw_match = window.matchMedia("(max-width: 668px)");
let nav_mob = document.querySelector(".nav-bar-mobile");
let mnu_items = document.querySelectorAll(".nav-elem");
let play_now = document.querySelector(".pn-button");
play_now.addEventListener("click", launchGame);
let mnu_names = [];
mnu_items.forEach((mnit) => {
    mnu_names.push(mnit.innerHTML);
});
let mnu_button = document.querySelector(".menu-item");
mnu_button.addEventListener("click", drawOnClick);
hidWhenWindow(wdw_match);
wdw_match.addListener(hidWhenWindow);