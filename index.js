document.addEventListener("DOMContentLoaded", function (event) {
  function hidePreloader() {
    var preloader = document.querySelector("#loader-wrapper");
    preloader.style.opacity = 0;
    preloader.style.zIndex = -99;
  }
  setTimeout(hidePreloader, 2000);
})

window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > window.innerHeight / 2) {
    navbar.style.transform = 'translateY(0)';
  } else {
    navbar.style.transform = 'translateY(-100%)';
  }

  const goToTopBtn = document.getElementById('goToTopBtn');
  if (window.scrollY > window.innerHeight * 2) {
    goToTopBtn.classList.add('show');
  } else {
    goToTopBtn.classList.remove('show');
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

document.getElementById('openPopupBtn').addEventListener('click', function () {
  const popup = document.getElementById('popup');
  popup.style.display = 'flex';
  setTimeout(() => {
    popup.classList.add('show');
  }, 10); // Delay to ensure display is set before adding the show class
});

document.getElementById('openPopupBtn2').addEventListener('click', function () {
  const popup = document.getElementById('popup2');
  popup.style.display = 'flex';
  setTimeout(() => {
    popup.classList.add('show');
  }, 10); // Delay to ensure display is set before adding the show class
});


document.getElementById('closePopupBtn').addEventListener('click', function () {
  const popup = document.getElementById('popup');
  popup.classList.remove('show');
  setTimeout(() => {
    popup.style.display = 'none';
  }, 500); // Match the duration of the CSS transition
});

document.getElementById('closePopupBtn2').addEventListener('click', function () {
  const popup = document.getElementById('popup2');
  popup.classList.remove('show');
  setTimeout(() => {
    popup.style.display = 'none';
  }, 500); // Match the duration of the CSS transition
});

document.getElementById('hamburgur1').addEventListener('click', function () {
  const menuPopup = document.getElementById('menuPopup');
  menuPopup.style.display = 'flex';
  setTimeout(() => {
    menuPopup.classList.add('show');
  }, 10); // Delay to ensure display is set before adding the show class
});

document.getElementById('hamburgur2').addEventListener('click', function () {
  const menuPopup = document.getElementById('menuPopup');
  menuPopup.style.display = 'flex';
  setTimeout(() => {
    menuPopup.classList.add('show');
  }, 10); // Delay to ensure display is set before adding the show class
});


document.getElementById('closeMenuBtn').addEventListener('click', function () {
  const menuPopup = document.getElementById('menuPopup');
  menuPopup.classList.remove('show');
  setTimeout(() => {
    menuPopup.style.display = 'none';
  }, 500); // Match the duration of the CSS transition
});

function closeMenu() {
  const menuPopup = document.getElementById('menuPopup');
  menuPopup.classList.remove('show');
  setTimeout(() => {
    menuPopup.style.display = 'none';
  }, 500); // Match the duration of the CSS transition
}

// Additional popups added by Hiro
document.getElementById('openPopupBtn2').addEventListener('click', function() {
  const popup = document.getElementById('popup2');
  popup.style.display = 'flex';
  setTimeout(() => {
      popup.classList.add('show');
  }, 10); // Delay to ensure display is set before adding the show class
});

document.getElementById('closePopupBtn2').addEventListener('click', function() {
  const popup = document.getElementById('popup2');
  popup.classList.remove('show');
  setTimeout(() => {
      popup.style.display = 'none';
  }, 500); // Match the duration of the CSS transition
});

document.getElementById('openPopupBtn3').addEventListener('click', function() {
  const popup = document.getElementById('popup3');
  popup.style.display = 'flex';
  setTimeout(() => {
      popup.classList.add('show');
  }, 10); // Delay to ensure display is set before adding the show class
});

document.getElementById('closePopupBtn3').addEventListener('click', function() {
  const popup = document.getElementById('popup3');
  popup.classList.remove('show');
  setTimeout(() => {
      popup.style.display = 'none';
  }, 500); // Match the duration of the CSS transition
});

document.getElementById('openPopupBtn4').addEventListener('click', function() {
  const popup = document.getElementById('popup4');
  popup.style.display = 'flex';
  setTimeout(() => {
      popup.classList.add('show');
  }, 10); // Delay to ensure display is set before adding the show class
});

document.getElementById('closePopupBtn4').addEventListener('click', function() {
  const popup = document.getElementById('popup4');
  popup.classList.remove('show');
  setTimeout(() => {
      popup.style.display = 'none';
  }, 500); // Match the duration of the CSS transition
});
