const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    navbar.classList.toggle("open");


});