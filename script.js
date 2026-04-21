function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const bars = document.querySelector(".bars");
  const cancell = document.querySelector(".cancell");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  bars.classList.toggle("hide");
  cancell.classList.toggle("hide");
}