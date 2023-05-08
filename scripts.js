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
  const words = ['Safety', 'Efficiency', 'Automation', 11];
const animatedText = document.getElementById('animated-text');

function getRandomChar() {
  return String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33));
}

async function animateText(word) {
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < 10; j++) {
      animatedText.textContent = word.slice(0, i) + getRandomChar() + word.slice(i + 1);
      await new Promise((resolve) => setTimeout(resolve, 60));
    }
  }
  animatedText.textContent = word;
}

(async function loop() {
  while (true) {
    for (const word of words) {
      if (typeof word === 'number') {
        const underlineWidth = (word / words[words.length - 1]) * 100;
        animatedText.style.setProperty('--underline-width', `${underlineWidth}%`);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } else {
        await animateText(word);
      }
    }
  }
})();
