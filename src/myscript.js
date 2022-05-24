function reveal() {
    var header = document.querySelector(".header");
    var reveals = document.querySelector(".reveal");
    var elementTop = document.querySelector(".HomeStatistics").getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    var elementVisible = 250;
    if (elementTop < windowHeight - elementVisible) {
        reveals.classList.add("active");
        header.classList.add("active-1");
    } else {
        reveals.classList.remove("active");
        header.classList.remove("active-1");
    }
}

function spin() {
    var car = document.querySelector(".car");
    var elementTop = car.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    var elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
        car.classList.add("spin");
    } else {
        car.classList.remove("spin");
    }
}
var stop = false;
function countUp() {
    var countUps = document.querySelectorAll(".CountUpComponent-CountComponent")
    var elementTop = document.querySelector(".StatisticsList-ListComponent").getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    var numbs = [];
    for (var i = 0; i < countUps.length; i++) {
        numbs[i] = parseInt(countUps[i].innerHTML.replace(/, /g, ''));
    }
    var elementVisible = 114;
    if (elementTop < windowHeight - elementVisible && stop === false) {
        stop = true;
        animateValue("test1", 0, 1505388, 10000);
        animateValue("test2", 0, 6340742, 10);
        animateValue("test3", 0, 122722, 10000);
    } else if (elementTop > windowHeight) {
        stop = false;
    }
}

function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 12345 : -1000;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ");
        if (current > end) {
            obj.innerHTML = end.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ");
            clearInterval(timer);
        }
    }, stepTime);
}

    
window.addEventListener("scroll", reveal);
window.addEventListener("scroll", countUp);
window.addEventListener("scroll", spin);    

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    // let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex == 6) { slideIndex = 1 }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex - 1].style.display = "inline-block";
    slides[slideIndex - 1].classList.add("low-opacity");
    slides[slideIndex - 1].onclick = function() { plusSlides(-1); };

    // dots[slideIndex - 1].className += " active";
    if (slideIndex < slides.length) {
        slides[slideIndex].style.display = "inline-block";
        slides[slideIndex].classList.remove("low-opacity");
        slides[slideIndex].onclick = ""
    }
    if (slideIndex + 1 < slides.length) {
        slides[slideIndex + 1].style.display = "inline-block";
        slides[slideIndex + 1].classList.add("low-opacity");
        slides[slideIndex + 1].onclick = function() { plusSlides(1); };
    }
    setTimeout(showSlides, 3000); 
}

function plusSlides(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    // let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex = n;
    if (slideIndex == 6) { slideIndex = 1 }
    if (slideIndex == 0) { slideIndex = 5 }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex - 1].style.display = "inline-block";
    slides[slideIndex - 1].classList.add("low-opacity");
    slides[slideIndex - 1].onclick = function() { plusSlides(-1); };


    // dots[slideIndex - 1].className += " active";
    if (slideIndex < slides.length) {
        slides[slideIndex].style.display = "inline-block";
        slides[slideIndex].classList.remove("low-opacity");

    }
    if (slideIndex + 1 < slides.length) {
        slides[slideIndex + 1].style.display = "inline-block";
        slides[slideIndex + 1].classList.add("low-opacity");
        slides[slideIndex + 1].onclick = function() { plusSlides(1); };
    }
}