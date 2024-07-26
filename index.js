document.addEventListener("DOMContentLoaded", function (event) {
    function hidePreloader() {
        var preloader = document.querySelector("#loader-wrapper");
        preloader.style.opacity = 0;
        preloader.style.zIndex = -99;
      }
      setTimeout(hidePreloader, 2000);
})

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > window.innerHeight / 2) {
      navbar.style.transform = 'translateY(0)';
  } else {
      navbar.style.transform = 'translateY(-100%)';
  }
});

document.getElementById('openPopupBtn').addEventListener('click', function() {
  const popup = document.getElementById('popup');
  popup.style.display = 'flex';
  setTimeout(() => {
      popup.classList.add('show');
  }, 10); // Delay to ensure display is set before adding the show class
});

document.getElementById('closePopupBtn').addEventListener('click', function() {
  const popup = document.getElementById('popup');
  popup.classList.remove('show');
  setTimeout(() => {
      popup.style.display = 'none';
  }, 500); // Match the duration of the CSS transition
});