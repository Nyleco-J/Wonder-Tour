const burger =document.querySelector(".toggle__menu");
const header =document.querySelector("header__nav");
burger.addEventListener("click", () =>{
  burger.classList.toggle("open");
  header.classList.toggle("open");
})