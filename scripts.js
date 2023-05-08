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
  const words = ["Safety", "Efficiency", "Automation"];
  const animatedText = document.getElementById("animated-text");
  let currentWordIndex = 0;
  let currentLetterIndex = 0;
  let currentWord = words[currentWordIndex];
  let animationInterval;

  function animateText() {
    if (currentLetterIndex <= currentWord.length) {
      animatedText.textContent = currentWord.slice(0, currentLetterIndex);
      currentLetterIndex++;
    } else {
      setTimeout(() => {
        currentLetterIndex = 0;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        currentWord = words[currentWordIndex];
      }, 1000); // 1-second pause between words
    }
  }

  animationInterval = setInterval(animateText, 200); // 200ms between each letter
});
