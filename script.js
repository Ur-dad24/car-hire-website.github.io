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
}));

//Add a border around the current page on the navbar.

document.addEventListener("DOMContentLoaded", function() {
  var currentPage = window.location.pathname.split("/").pop(); // Get the current page filename

  // Add 'active' class to the link that matches the current page
  var link = document.getElementById(currentPage.split(".")[0] + "-link");
  if (link) {
    link.classList.add("navlink-active");
  }
});

  