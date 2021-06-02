function handleSelect(elm) {
  window.location = elm.value;
}

// MenuBurger
function toggleDropdownMenu() {
  let menuDropdown = document.querySelector("#navbar--menu-dropdown");
  menuDropdown.classList.toggle("navbar--menu-is-visible");
  menuDropdown.style.zIndex = "999";
}
// SwiperJs
const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// GoUpButton
const goUpButton = document.querySelector("#button--go-up");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    goUpButton.style.display = "block";
  } else {
    goUpButton.style.display = "none";
  }
}
function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
