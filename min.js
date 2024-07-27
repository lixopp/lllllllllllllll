
let ridleft = document.querySelector(".ridleft")
function tt(){
    ridleft.classList.add("activ")

}
function ttt(){
   ridleft.classList.remove("activ")
}
var swiper = new Swiper(".swiper", {
   spaceBetween:30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      
      dynamicbullests:true,

    },
    autoplay:{
      delay: 2100,
    },
    loop:true,
  });
  var swiper = new Swiper(".silditm", {
    
    pagination: {
     
      clickable: true,
      
      dynamicbullests:true,

    }
    , slidesPerView:4,
    spaceBetween:30,
    autoplay:{
      delay: 3000,
    },
    navigation:{
      nextEl:".swiper-button-next",
      prevEL:".swiper-button-prev"
    },
    breakpoints:{
    800:{
      slidesPerView:4,
    },
      424:{
        slidesPerView:2,
      },
      375:{
        slidesPerView:2,
      },
      320:{
        slidesPerView:2,
      },
    },
    loop:true,
  });

let img = document.querySelector(".yt");
function ty (imgr){
  img.src = imgr
}