document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.querySelector(".carousel-container");
    const secondCarousel = document.querySelector(".second-carousel");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    const carouselSlides = document.querySelectorAll(".carousel-slide");
    const secondCarouselSlides = document.querySelectorAll(".second-carousel-slide");
  
    let currentCarouselIndex = 0;
    let currentSecondCarouselIndex = 0;
  
    // Function to show a specific carousel slide
    function showCarouselSlide(index) {
      carouselSlides.forEach((slide) => {
        slide.classList.remove("active");
      });
      carouselSlides[index].classList.add("active");
    }
  
    // Function to show a specific second carousel slide
    function showSecondCarouselSlide(index) {
      secondCarouselSlides.forEach((slide) => {
        slide.classList.remove("active");
      });
      secondCarouselSlides[index].classList.add("active");
    }
  
    // Function to handle next button click for the first carousel
    function nextCarouselSlide() {
      currentCarouselIndex = (currentCarouselIndex + 1) % carouselSlides.length;
      showCarouselSlide(currentCarouselIndex);
    }
  
    // Function to handle previous button click for the first carousel
    function prevCarouselSlide() {
      currentCarouselIndex =
        (currentCarouselIndex - 1 + carouselSlides.length) % carouselSlides.length;
      showCarouselSlide(currentCarouselIndex);
    }
  
    // Function to handle next button click for the second carousel
    function nextSecondCarouselSlide() {
      currentSecondCarouselIndex =
        (currentSecondCarouselIndex + 1) % secondCarouselSlides.length;
      showSecondCarouselSlide(currentSecondCarouselIndex);
    }
  
    // Function to handle previous button click for the second carousel
    function prevSecondCarouselSlide() {
      currentSecondCarouselIndex =
        (currentSecondCarouselIndex - 1 + secondCarouselSlides.length) %
        secondCarouselSlides.length;
      showSecondCarouselSlide(currentSecondCarouselIndex);
    }
  
    // Function to handle automatic carousel change for the first carousel
    function autoChangeCarousel() {
      nextCarouselSlide();
    }
  
    // Function to handle automatic second carousel change
    function autoChangeSecondCarousel() {
      nextSecondCarouselSlide();
    }
  
    // Set interval for automatic carousel change for the first carousel
    setInterval(autoChangeCarousel, 4000);
  
    // Set interval for automatic second carousel change
    setInterval(autoChangeSecondCarousel, 3000);
  
    // Event listeners for next and previous buttons for both carousels
    nextButton.addEventListener("click", nextSecondCarouselSlide);
    prevButton.addEventListener("click", prevSecondCarouselSlide);
  });

