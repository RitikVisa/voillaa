let currentSlide = 0;
      const slides = document.querySelectorAll(".slide");
      const buttons = document.querySelectorAll(".button"); // Get all buttons

      function showSlide(index) {
        slides.forEach((slide) => slide.classList.remove("active"));
        slides[index].classList.add("active");

        // Reset and re-trigger button animation
        buttons.forEach((button) => {
          // Remove any inline style to reset animation
          button.style.animation = "none";
          // Trigger reflow/repaint
          void button.offsetHeight;
          // Re-apply animation
          button.style.animation = "";
        });

        const overlayTexts = document.querySelectorAll(".overlay-text");
        overlayTexts.forEach((text) => {
          text.classList.remove("animate-text");
          void text.offsetWidth;
          text.classList.add("animate-text");
        });
      }

      function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      }

      function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
      }

      setInterval(nextSlide, 4000); // Change slide every 3 seconds

      window.addEventListener('scroll', function() {
        var navbar = document.getElementById('navbar');
        if (window.pageYOffset > 0) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    // progress bar animation
    // Function to start progress bar animation
function animateProgressBar(progressBar, width) {
  progressBar.style.width = 0;
  setTimeout(() => {
      progressBar.style.width = width;
  }, 100);
}

// Intersection Observer to trigger animation on scroll
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          document.querySelectorAll('.progress-bar').forEach(bar => {
              const width = bar.getAttribute('data-width');
              animateProgressBar(bar, width);
          });
      }
  });
}, { threshold: 0.6 });

observer.observe(document.querySelector('.banner'));

// banner numbers animation
function animateNumber(element, start, end, duration) {
  let startTime = null;

  function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = Math.easeInOutQuad(timeElapsed, start, end - start, duration);
      element.innerText = Math.round(run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}

// Easing function for smooth animation
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

let observer1 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          const numbers = entry.target.querySelectorAll('.numbers h2');
          numbers.forEach(num => {
              const targetValue = parseInt(num.getAttribute('data-target'), 10);
              animateNumber(num, 0, targetValue, 2000); // Duration in ms
          });
      }
  });
}, { threshold: 0.6 });

observer1.observe(document.querySelector('.banner-section'));



var tl3 = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    start:"60% 60%",
    end: "200% 60%",
    scrub:1,
    pin: true
}})

tl3.to(".image",{
    height:"800vh",
    width:"850vw"
},"a")
.to("#mainH1",{
    top:"35%",
    fontSize: "4.5rem",
    opacity:"1"

},"a")
.to("#mainImg",{
    height:"120%",
    width:"120%",
    filter: "blur(5px) grayscale(100%)" // Apply blur effect
   
},"a")
.to(".main-p",{
    top:"55%",
    fontSize: "1rem",
    opacity:"1"
},"a")
.to("#mainH1-2",{
  top:"48%",
  fontSize: "2rem",
  opacity:"1"

},"a")
.to("#navbar",{
  backgroundColor: "#fff"
})

var tl = gsap.timeline({scrollTrigger:{
  trigger:".video-section",
  start:"0%",
  end: "10% ",
  scrub:1,
  pin: true
}})

tl.to(".video-img",{
  marginTop: "0%",
  transform: "scale(1.2)"

})

var tl4 = gsap.timeline({scrollTrigger:{
  trigger:"#main-slideshow",
  start:"50% 60%",
  end: "150% 60%",
  scrub:2,
  pin: true
}})

tl4.to(".slideshow",{
left: "0%"

},"c")

.to(".slideshow2",{
  left: "0%"
},"c")

