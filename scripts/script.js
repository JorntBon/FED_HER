/* 
 Menu openen en sluiten. + spans
*/
const menuKnop = document.querySelector("header button:first-of-type");
const deButton = document.querySelector("header > button");

menuKnop.onclick = function () {
    toggleMenu();
    toggleButton();
};

function toggleMenu() {
    const deNav = document.querySelector("header nav:first-of-type ul");
    deNav.classList.toggle("toonMenu");
}

function toggleButton() {
    deButton.classList.toggle("open");
}






