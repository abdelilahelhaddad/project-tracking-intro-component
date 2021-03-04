const burgerMenu = document.querySelector(".burger");
const list = document.querySelector(".list");

burgerMenu.addEventListener("click", (e)=>{
  e.preventDefault();
  burgerMenu.classList.toggle("active");
  if (burgerMenu.classList.contains("active")) {
    list.classList.add("active");
  }else{
    list.classList.remove("active");
  }
});