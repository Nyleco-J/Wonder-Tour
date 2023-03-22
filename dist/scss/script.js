const burger = document.querySelector(".toggle__menu");
const header = document.querySelector(".header__nav");
burger.addEventListener("click", () =>{
  burger.classList.toggle('open');
  header.classList.toggle('open');
  dot.classList.remove('open');
  time.classList.remove('open');
});

const dot = document.querySelector(".toggle__menu1");
const time = document.querySelector(".info")
dot.addEventListener("click", ()=>{
  dot.classList.toggle('open');
  time.classList.toggle('open');
  burger.classList.remove('open');
  header.classList.remove('open');
})