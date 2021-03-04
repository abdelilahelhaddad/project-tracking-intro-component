const burger = document.querySelector(".burger");
const iconBurger = document.querySelector(".icon-burger");
const iconClose = document.querySelector(".icon-close");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
});