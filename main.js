let menu = document.getElementById("icon_menu");
let navList = document.querySelector(".navList");
let menuI = document.querySelector(".icon_menu I");
menu.addEventListener("click", () => {
  navList.classList.toggle("hidden");
  if (menuI.classList.contains("fa-bars")) {
    menuI.classList.replace("fa-bars", "fa-xmark");
  } else {
    menuI.classList.replace("fa-xmark", "fa-bars");
  }
});
