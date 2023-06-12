// Change logo

const currentLogo = document.getElementById("green");
const logo = document.getElementById("logo");

logo.addEventListener("mouseenter", () =>{
    currentLogo.src = "Images/square.png"
})

logo.addEventListener("mouseleave", () =>{
    currentLogo.src = "Images/new-moon (1).png"
})


//NavbarToggle

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n =>n.addEventListener('click', () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))