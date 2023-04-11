menuBtn.addEventListener('click', function () {
  closeBtn.style.display = 'block';
  menuBtn.style.display = "none";
  menu.style.display = 'Flex';
  overlay.classList.remove("hidden");
  body.style.overflow = "hidden"
  })