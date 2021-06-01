// MenuBurger
function toggleDropdownMenu() {
  let menuDropdown = document.querySelector('#navbar--menu-dropdown');
  menuDropdown.classList.toggle('navbar--menu-is-visible');
  menuDropdown.style.zIndex = '999';
}

// Container Dropdown Menu
function toggleContainerDropdownMenu() {
  let containerDropdown = document.querySelector(
    '#container--menu-dropdown',
  );
  containerDropdown.classList.toggle('container--menu-is-visible');
  containerDropdown.style.zIndex = '999';
}

// Container Dropdown Menu
function toggleContainerDropdownMenu2() {
  let containerDropdown2 = document.querySelector(
    '#container--menu-dropdown2',
  );
  containerDropdown2.classList.toggle('container--menu-is-visible');
  containerDropdown2.style.zIndex = '999';
}

// SwiperJs
const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// GoUpButton
const goUpButton = document.querySelector('#button--go-up');
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    goUpButton.style.display = 'block';
  } else {
    goUpButton.style.display = 'none';
  }
}
function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
