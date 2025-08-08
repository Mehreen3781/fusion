// Hamburger menu toggle
document.getElementById('hamburger-menu').addEventListener('click', function() {
    var mobileNav = document.getElementById('mobile-nav');
    var hamburger = document.getElementById('hamburger-menu');
    mobileNav.classList.toggle('active');
    hamburger.classList.toggle('change');
});

/*=== Home section slider start ===*/
let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlides() {
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function plusSlides(n) {
    slideIndex = (slideIndex + n + totalSlides) % totalSlides;
    showSlides();
}

function autoSlide() {
    slideIndex = (slideIndex + 2) % totalSlides;
    showSlides();
}

setInterval(autoSlide, 6000); // Change slide every 4 seconds
showSlides();


// special tiles slider section start

// slide images according o the slide buttons clicks

const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -340 : 340;
            const scrollAmount = imageList.clientWidth = direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
        });
    });
}


window.addEventListener("load", initSlider);


let valueDisplay = document.querySelectorAll('.num');
let interval = 10000;

valueDisplay.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-value"));

  let duration = Math.floor(interval/endValue);
  let Counter = setInterval(function (){
      startValue += 1;
      valueDisplay.textContent = startValue;
      if(startValue == endValue) {
          clearInterval(Counter);
      }
  }, duration)
})


/*=== Geo location ===*/

var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        console.log(navigator.geolocation);
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        x.innerHTML = "Geolocation not supported";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: "+position.coords.latitude + "<br>Longitude: "+position.coords.longitude;
}