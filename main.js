let menu = document.getElementById("icon_menu");
let navList = document.querySelector(".navList");
let menuI = document.querySelector(".icon_menu I");
let navListLink = document.querySelectorAll(".navList ");
menu.addEventListener("click", () => {
  navList.classList.toggle("hidden");
  if (menuI.classList.contains("fa-bars")) {
    menuI.classList.replace("fa-bars", "fa-xmark");
  } else {
    menuI.classList.replace("fa-xmark", "fa-bars");
  }
});

navListLink.forEach(li => {
  li.addEventListener("click", () => {
    navList.classList.add("hidden");
  });
});

let taps = document.querySelectorAll(".tabs_wrap ul li");
let all = document.querySelectorAll(".ulFilter li");
taps.forEach(tap => {
  tap.addEventListener("click", () => {
    taps.forEach(tapRemove => {
      tapRemove.classList.remove("active");
    });
    tap.classList.add("active");
    let tapsVal = tap.getAttribute("data-taps");
    all.forEach(item => {
      if (tapsVal == item.getAttribute("data-category")) {
        item.classList.add("show");
        item.classList.remove("hide");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
      if (tapsVal === "all") {
        item.classList.add("show");
        item.classList.remove("hide");
      }
    });
  });
});

var swiper = new Swiper(".mySwiper", {
  speed: 400,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

let toTop = document.querySelector(".toTop");
window.addEventListener("scroll", () => {
  toTop.classList.toggle("active", window.scrollY > 100);
});
toTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

let theme__toggle = document.getElementById("theme__toggle");
let theme__toggleI = document.querySelector(".theme__toggle i");
let html = document.querySelector("html");
if (localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightMode();
}
theme__toggle.addEventListener("click", () => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }
});
function darkMode() {
  html.classList.add("dark");
  localStorage.setItem("mode", "dark");
  if (theme__toggleI.classList.contains("fa-moon")) {
    theme__toggleI.classList.replace("fa-moon", "fa-sun");
  } else {
    theme__toggleI.classList.replace("fa-sun", "fa-moon");
  }
}
function lightMode() {
  html.classList.remove("dark");
  localStorage.setItem("mode", "light");
  if (theme__toggleI.classList.contains("fa-moon")) {
    theme__toggleI.classList.replace("fa-moon", "fa-sun");
  } else {
    theme__toggleI.classList.replace("fa-sun", "fa-moon");
  }
}
