let menuBtn = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');


menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active'); 

  if(window.scrollY > 20 ){
      document.querySelector('header').classList.add('active');
  }else{
    document.querySelector('header').classList.remove('active');
  }
}