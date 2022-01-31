console.log("hello")

const navLinks = document.getElementById("navLinks");
const faBars = document.getElementById("faBars");

function showMenu() {
    navLinks.style.display= "inline";
    faBars.style.display= "none";
};

function hideMenu() {
    navLinks.style.display= "none";
    faBars.style.display= "inline";
}
