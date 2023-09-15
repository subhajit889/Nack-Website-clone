// Main Carousel
const mainCarousel = document.querySelector('.carousel-container');
const mainCarouselSlides = mainCarousel.querySelectorAll('.carousel-slide');
let mainCurrentSlide = 0;

function mainShowSlide(index) {
  mainCarouselSlides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function mainNextSlide() {
  mainCurrentSlide = (mainCurrentSlide + 1) % mainCarouselSlides.length;
  mainShowSlide(mainCurrentSlide);
}

setInterval(mainNextSlide, 5000); // Change slide every 5 seconds




document.addEventListener('DOMContentLoaded', function () {
  const secondCarousel = document.querySelector('.second-carousel');
  const slides = secondCarousel.querySelectorAll('.second-carousel-slide');
  const prevButton = secondCarousel.querySelector('.prev-button');
  const nextButton = secondCarousel.querySelector('.next-button');

  let currentIndex = 0;

  function showSlides(startIndex) {
      slides.forEach((slide, index) => {
          if (index >= startIndex && index < startIndex + 3) {
              slide.style.display = 'block';
          } else {
              slide.style.display = 'none';
          }
      });
  }

  function nextSlides() {
      currentIndex = (currentIndex + 3) % slides.length;
      showSlides(currentIndex);
  }

  function prevSlides() {
      currentIndex = (currentIndex - 3 + slides.length) % slides.length;
      showSlides(currentIndex);
  }

  // Initialize the first set of three slides
  showSlides(currentIndex);

  // Add click event listeners to the next and prev buttons
  nextButton.addEventListener('click', nextSlides);
  prevButton.addEventListener('click', prevSlides);

  // Automatically switch to the next set of three slides every 5 seconds (adjust as needed)
});



// Get a reference to the navbar
const navbar = document.getElementById('navbar');
// Listen for the "scroll" event on the window
window.addEventListener('scroll', () => {
    // Check the scroll position
    if (window.scrollY > 100) { // Adjust the value as needed
        // Add the "scroll" class to the navbar
        navbar.classList.add('scroll');
    } else {
        // Remove the "scroll" class from the navbar
        navbar.classList.remove('scroll');
    }
});

// Set the initial state based on the initial scroll position
if (window.scrollY > 100) { // Adjust the value as needed
    navbar.classList.add('scroll');
} else {
    navbar.classList.remove('scroll');
}



document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.querySelector('.hamburger');
  var hamburgerList = document.querySelector('.hamburger-list');

  hamburger.addEventListener('click', function () {
      // Toggle the visibility of the menu
      if (hamburgerList.style.display === 'block') {
          hamburgerList.style.display = 'none';
      } else {
          hamburgerList.style.display = 'block';
      }
  });

  // Close the menu if the user clicks outside of it
  document.addEventListener('click', function (event) {
      if (!hamburger.contains(event.target)) {
          hamburgerList.style.display = 'none';
      }
  });
});