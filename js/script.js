
// headers show on scroll

(function () {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("header-active");
    } else {
      header.classList.remove("header-active");
    }
  };
})();

// scroll to top
const scrolOnTop = document.querySelector(".scrol-on-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrolOnTop.classList.add("active-scroll");
  } else {
    scrolOnTop.classList.remove("active-scroll");
  }
});

// burger menyu
let burgerLogo = document.querySelector(".header-logo");
let headerBurger = document.querySelector(".header_burger");
let showNav = document.querySelector(".header-nav");
let btnLoginPopup =document.querySelector('.btnlogin-popup')


headerBurger.addEventListener("click", function () {
  headerBurger.classList.toggle("burger");
  burgerLogo.classList.toggle("logo-position");
  showNav.classList.toggle("header-nav-visible");
});

// click on btn from burgermenu
btnLoginPopup.addEventListener("click", function () {
  headerBurger.classList.remove("burger");
  burgerLogo.classList.remove("logo-position");
  showNav.classList.remove("header-nav-visible");
});





// animation on croll links

(function () {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector(".header").clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const scrollTo = function () {
    const links = document.querySelectorAll(".js-scroll");
    links.forEach((each) => {
      each.addEventListener("click", function () {
        const currentTarget = this.getAttribute("href");
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
})();

// sign in form start

const signWrapper = document.querySelector(".sign-wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnlogin-popup");
const iconClose = document.querySelector(".icon-close");
const loginHome = document.querySelector(".login-home");

registerLink.addEventListener("click", () => {
  signWrapper.classList.add("active");
});
loginLink.addEventListener("click", () => {
  signWrapper.classList.remove("active");
});
btnPopup.addEventListener("click", () => {
  signWrapper.classList.add("active-popup");
  loginHome.classList.toggle("hide");
});
iconClose.addEventListener("click", () => {
  signWrapper.classList.remove("active-popup");
  loginHome.classList.add("hide");
});

