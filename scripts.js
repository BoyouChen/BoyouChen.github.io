$(document).ready(function() {
  // Add smooth scrolling to all links
  $('a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });

  // Function to check if an element is in the viewport
  function isInViewport(element) {
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  }

  // Fade in content sections when they appear in the viewport
function fadeInContent() {
  $('.hidden').each(function() {
    var delay = 0;
    if ($(this).is('header')) {
      delay = 0;
    } else if ($(this).is('h1')) {
      delay = 200;
    } else if ($(this).is('p') && $(this).parent().hasClass('intro')) {
      delay = 400;
    } else if ($(this).is('img')) {
      delay = 600;
    } else if ($(this).is('section')) {
      delay = 800;
    }
    if (isInViewport(this)) {
      $(this).delay(delay).animate({opacity: 1}, 1000).removeClass('hidden');
    }
  });
}



  // Initial check for content sections in the viewport
  fadeInContent();

  // Listen for scroll events and trigger fadeInContent()
  $(window).scroll(fadeInContent);
});

document.addEventListener("DOMContentLoaded", function () {
  const words = ["Human Factors", "Transportation Safety", "Driving Behaviour", "Machine Learning"];
  const animatedText = document.getElementById("animated-text");
  let currentWordIndex = 0;
  let currentLetterIndex = 0;
  let direction = 1;
  let text = "";
  let speed = 300; // Initial animation speed in milliseconds
  let speedChangeRate = 0.9; // Rate at which the speed changes

  async function animateText() {
    while (true) {
      const word = words[currentWordIndex];
      const randomizedText = text + String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33));

      // Update the text content
      animatedText.textContent = randomizedText;

      if (direction === 1) {
        // Forward animation: reveal letters
        if (currentLetterIndex < word.length) {
          text += word[currentLetterIndex];
          currentLetterIndex++;
          speed *= speedChangeRate; // Gradually slow down
        } else {
          direction = -1;
          currentLetterIndex--;
          speed = 100; // Reset speed for backward animation
        }
      } else {
        // Backward animation: remove letters
        if (currentLetterIndex > 0) {
          text = text.slice(0, -1);
          currentLetterIndex--;
          speed /= speedChangeRate; // Gradually speed up
        } else {
          direction = 1;
          currentWordIndex = (currentWordIndex + 1) % words.length;
          text = "";
          speed = 300; // Reset speed for next word
        }
      }

      await new Promise((resolve) => setTimeout(resolve, speed));
    }
  }

  animateText();
});

window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  setTimeout(function () {
    preloader.style.display = 'none';
    document.body.style.overflow = 'auto';
  }, 1000); // This is the delay in milliseconds before the preloader disappears
});
