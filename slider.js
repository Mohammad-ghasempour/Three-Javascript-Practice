const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const allImages = document.querySelectorAll(".images");

let sliderNumber = 1;
const imagesLength = allImages.length;
const nextSlide = () => {
  slider.style.transform = `translateX(-${sliderNumber * 600}px)`;
  sliderNumber++;
};

const firstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  sliderNumber = 1;
};
right.addEventListener("click", () => {
  sliderNumber < imagesLength ? nextSlide() : firstSlide();
});


const prevSlide = () => {
    //slider.style.transform = `translateX(-${sliderNumber * 600}px)`;
    sliderNumber--;
    slider.style.transform = `translateX(-${(sliderNumber * 600) - 600}px)`;
    //sliderNumber--;
   
  };



left.addEventListener("click" , ()=>{
    prevSlide()
})
