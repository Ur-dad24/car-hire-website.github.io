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

  

// Change hero background Image


document.addEventListener('DOMContentLoaded', function() {
  var images = [
    'Images/big1.jpg', 
     'Images/big3.jpg', 
     'Images/big4.jpg', 
     'Images/big5.jpg', 
     'Images/big6.jpg', 
     'Images/big7.jpg',
     'Images/big8.jpg',
     'Images/big9.jpg'
    ]; 
  var currentIndex = 0;
  var heroSection = document.querySelector('.hero');

  function preloadImages() {
    for (var i = 0; i < images.length; i++) {
        var img = new Image();
        img.src = images[i];
    }
}

  function changeBackgroundImage() {
      currentIndex = (currentIndex + 1) % images.length; // Cycle through the images

      var imageUrl = 'url(' + images[currentIndex] + ')';
      heroSection.style.backgroundImage = imageUrl;
  }
  preloadImages();
  setInterval(changeBackgroundImage, 5000); // Change image every 5 seconds
});


// Fleet Section

// document.addEventListener("DOMContentLoaded", function() {
//   const slider = document.querySelector(".slider");
//   const prevBtn = document.querySelector(".prev-btn");
//   const nextBtn = document.querySelector(".next-btn");
//   const slideWidth = 750; // Width of each image in pixels
//   let slideIndex = 0;
//   let isSliding = false;
//   let touchStartX = 0;
//   let touchEndX = 0;

//   prevBtn.addEventListener("click", function() {
//     if (!isSliding) {
//       slideIndex--;
//       slide();
//     }
//   });

//   nextBtn.addEventListener("click", function() {
//     if (!isSliding) {
//       slideIndex++;
//       slide();
//     }
//   });

//   slider.addEventListener("touchstart", function(event) {
//     touchStartX = event.touches[0].clientX;
//   });

//   slider.addEventListener("touchend", function(event) {
//     touchEndX = event.changedTouches[0].clientX;
//     handleSwipeGesture();
//   });

//   function slide() {
//     const maxIndex = slider.childElementCount - 1;
//     const minTranslateX = -(maxIndex * slideWidth);
//     const maxTranslateX = 0;

//     if (slideIndex > maxIndex) {
//       slideIndex = 0; // Wrap around to the first slide
//     } else if (slideIndex < 0) {
//       slideIndex = maxIndex; // Wrap around to the last slide
//     }

//     const translateX = -slideIndex * slideWidth;

//     isSliding = true;
//     slider.style.transform = `translateX(${translateX}px)`;

//     slider.addEventListener("transitionend", function() {
//       isSliding = false;
//     });
//   }

//   function handleSwipeGesture() {
//     const swipeThreshold = slideWidth / 2;
//     const swipeDistance = touchEndX - touchStartX;

//     if (swipeDistance > swipeThreshold) {
//       slideIndex--;
//       slide();
//     } else if (swipeDistance < -swipeThreshold) {
//       slideIndex++;
//       slide();
//     }
//   }
// });



document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".slider");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const slideWidth = 700; // Width of each image in pixels
  let slideIndex = 0;
  let isSliding = false;

  prevBtn.addEventListener("click", function() {
    if (!isSliding && slideIndex > 0) {
      slideIndex--;
      slide();
    }
  });

  nextBtn.addEventListener("click", function() {
    if (!isSliding && slideIndex < slider.childElementCount - 1) {
      slideIndex++;
      slide();
    }
  });

  function slide() {
    const translateX = -slideIndex * slideWidth;

    isSliding = true;
    slider.style.transform = `translateX(${translateX}px)`;

    slider.addEventListener("transitionend", function() {
      isSliding = false;
    });
  }
});
