
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav-links");
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

 // Create an Intersection Observer
 const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // If the element is in view
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('tracking-in-contract');
            // Stop observing the element (optional - animation runs once)
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Trigger when at least 10% of the element is visible
});

// Get all elements with the 'animate-me' class
const animateElements = document.querySelectorAll('.animate-me');

// Observe each element
animateElements.forEach(element => {
    observer.observe(element);
});

document.addEventListener('DOMContentLoaded', function () {
    // You can add scroll effects or other interactive elements here
    
    // For example, change navbar opacity on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.nav-container');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = ' rgba(0, 0, 0, 0.401)';
        } else {
            navbar.style.backgroundColor = ' rgba(0, 0, 0, 0.401)';
        }
    });
});

$(document).ready(function() {
    $('.service-card, .destination-card').tilt({
        maxTilt: 10,
        perspective: 1000,
        scale: 1.03,
        speed: 800,
        glare: true,
        maxGlare: 0.3,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        reset: true,
        transformStyle: "preserve-3d",
        disableAxis: null
    });
});

// Initialize the tour packages slider
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    const tourSlider = new Swiper('.tour-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 576px
            576: {
                slidesPerView: 2,
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 3,
            }
        }
    });
});


const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});


