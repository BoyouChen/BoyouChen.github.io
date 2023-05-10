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
  const words = ["Human Factors", "Transportation Safety", "Driving Behaviour","Machine Learning"];
  const animatedText = document.getElementById("animated-text");
  let currentWordIndex = 0;
  let currentLetterIndex = 0;
  let direction = 1;
  let text = "";

  async function animateText() {
    while (true) {
      for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
        const word = words[wordIndex];

        for (let letterIndex = 0; letterIndex <= word.length; letterIndex++) {
          text = word.slice(0, letterIndex);
          animatedText.textContent = text;
          await new Promise((resolve) => setTimeout(resolve, 100));
        }

        await new Promise((resolve) => setTimeout(resolve, 800));

        for (let letterIndex = word.length; letterIndex >= 0; letterIndex--) {
          text = word.slice(0, letterIndex);
          text += String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33));
          animatedText.textContent = text;
          await new Promise((resolve) => setTimeout(resolve, 100));
        }

        await new Promise((resolve) => setTimeout(resolve, 800));
      }
    }
  }

  animateText();
});
