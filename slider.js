const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const allImages = document.querySelectorAll(".images");

let sliderNumber = 1;
right.addEventListener("click" , ()=>{
   if (sliderNumber < allImages.length ){
       slider.style.transform = `translateX(-${sliderNumber * 600}px)`;
       sliderNumber ++;
   } else{
    slider.style.transform = `translateX(0px)`;
    sliderNumber=1;
   }
   
  
})