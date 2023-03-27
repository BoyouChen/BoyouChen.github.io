$(document).ready(function () {
  let words = $('.word');
  let currentIndex = 0;

  function changeWord() {
    $(words[currentIndex]).addClass('animate__fadeOut');

    setTimeout(function () {
      $(words[currentIndex]).removeClass('animate__fadeIn animate__fadeOut');
      currentIndex = (currentIndex + 1) % words.length;
      $(words[currentIndex]).addClass('animate__fadeIn');
    }, 1000); // match the animation-duration specified in the CSS
  }

  setInterval(changeWord, 3000);
});
