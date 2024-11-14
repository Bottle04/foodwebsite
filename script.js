let menu = document.querySelector('#menu-bar')
let mynav = document.querySelector('.navbar')

menu.onclick = () =>{
  menu.classList.toggle('fa-times')
  mynav.classList.toggle('active')
}

window.addEventListener("scroll", function() {
  var navbar = document.querySelector("header");
  var scrolled = window.scrollY > 0;
  navbar.classList.toggle("scrolled", scrolled);
});
































// let menu = document.querySelector('#menu-bar');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () =>{

//   menu.classList.toggle('fa-times');
//   navbar.classList.toggle('active');

// }


// window.onscroll = () =>{

//   menu.classList.remove('fa-times');
//   navbar.classList.remove('active');

//   if(window.scrollY > 60){
//     document.querySelector('#scroll-top').classList.add('active');
//   }else{
//     document.querySelector('#scroll-top').classList.remove('active');
//   }

// }

// function loader(){
//   document.querySelector('.loader-container').classList.add('fade-out');
// }

// function fadeOut(){
//   setInterval(loader, 3000);
// }

// window.onload = fadeOut();