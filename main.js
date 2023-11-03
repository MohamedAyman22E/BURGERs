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
