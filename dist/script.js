const burger = document.querySelector(".toggle__menu");
const header = document.querySelector(".header__nav");
const get =document.querySelector(".get-in-touch .get")
burger.addEventListener("click", () =>{
  burger.classList.toggle('open');
  header.classList.toggle('open');
  dot.classList.remove('open');
  time.classList.remove('open');
  get.classList.toggle('z');
});

const dot = document.querySelector(".toggle__menu1");
const time = document.querySelector(".info")
dot.addEventListener("click", ()=>{
  dot.classList.toggle('open');
  time.classList.toggle('open');
  burger.classList.remove('open');
  header.classList.remove('open');
});
// const fachev = document.querySelector(".navi li i");
// const drop = document.querySelector(".drop");
// fachev.addEventListener("click", () =>{
//   drop.classList.toggle('open');
// fachev.classList.toggle('open');
// });


const fachev1 = document.querySelectorAll(".navi .down")
fachev1.forEach((song) => {
    song.addEventListener("click", () => {
        song.querySelector(".drop").classList.toggle("open");
        song.querySelector("i").classList.toggle("open");
    })
});
var slider = tns({
  container: '.get-in-touch__wrapper',
  items: 1,
  axis: 'vertical',
  slideBy: 'page',
  autoplay: true
});

const btop =document.querySelector(".up") ;
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if(window.pageYOffset >=10){
    btop.classList.add("show")
  }
  else{
    btop.classList.remove("show")
  }
});