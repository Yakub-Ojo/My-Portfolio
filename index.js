const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close_icon");
const menu = document.querySelector(".nav-list");
console.log(menu)
const overlay = document.querySelector(".overlay");
const body = document.body;

menuBtn.addEventListener('click', function () {
  closeBtn.style.display = 'block';
  menuBtn.style.display = "none";
  menu.style.display = 'Flex';
  overlay.classList.remove("hidden");
  body.style.overflow = "hidden"
  })

