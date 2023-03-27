$(document).ready(function () {
  let words = $('.word');
  let currentIndex = 0;
  let nextIndex = 1;

  function changeWord() {
    $(words[currentIndex]).removeClass('animate__fadeIn').addClass('animate__fadeOut');
    $(words[nextIndex]).removeClass('animate__fadeOut').addClass('animate__fadeIn');

    currentIndex = nextIndex;
    nextIndex = (nextIndex + 1) % words.length;
  }

  setInterval(changeWord, 3000);
});
