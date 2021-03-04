const burgerMenu = document.querySelector(".burger");

burgerMenu.addEventListener("click", (e)=>{
  e.preventDefault();
  burgerMenu.classList.toggle("active");
});