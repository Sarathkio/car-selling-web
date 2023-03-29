let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');

}
document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-form-container').classList.remove('active');

}


window.onload = () =>{

if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
}else{
    document.querySelector('.header').classList.add('active');

}
menu.classList.remove('fa-times');
navbar.classList.remove('active');

}
document.querySelector('.home').onmousemove = (e) =>{
    document.querySelectorAll('.home-parallax').forEach(elm =>{
        let speed = elm.getAttribute('date-speed');
        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y= (window.innerHeight - e.pageX * speed) / 90;

        elm.style.transform = `translateY($(y)px) translateX($(x)px)`;


    });
};
var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grapCursor:true,
    centerelide:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
    
      },
      768: {
        slidesPerView: 4,
        
      },
      991: {
        slidesPerView: 5,
      },
    },
  });

  var swiper = new Swiper(".features-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grapCursor:true,
    centerelide:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
    
      },
      768: {
        slidesPerView: 4,
        
      },
      991: {
        slidesPerView: 5,
      },
    },
  });


  var swiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grapCursor:true,
    centerelide:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
    
      },
      768: {
        slidesPerView: 4,
        
      },
      991: {
        slidesPerView: 5,
      },
    },
  });

