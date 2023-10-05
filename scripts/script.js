// JS Johan Cruijff Arena //


var menuKnop = document.querySelector("header button:first-of-type");

menuKnop.onclick = openMenu;

function openMenu(){
    var deNav = document.querySelector("header nav:first-of-type ul");
    deNav.classList.add("toonMenu");
}




var sluitKnop = document.querySelector("header nav:first-of-type ul li:first-of-type img");

sluitKnop.onclick = sluitMenu;

function sluitMenu() {
    var deNav = document.querySelector("header nav:first-of-type ul");
    deNav.classList.remove("toonMenu");
}