const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const allImages = document.querySelectorAll(".images");
const bottom = document.querySelector(".bottom");

let sliderNumber = 1;
const imagesLength = allImages.length;


const nextSlide = () => {
  slider.style.transform = `translateX(-${sliderNumber * 600}px)`;
  
  buttons[sliderNumber-1].style.backgroundColor = '';
  buttons[sliderNumber].style.backgroundColor = 'white';
  sliderNumber++;
};

const firstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  buttons[sliderNumber-1].style.backgroundColor = '';
  
  sliderNumber = 1;
  buttons[sliderNumber-1].style.backgroundColor = 'white';
};

const lastSlide = () => {
  slider.style.transform = `translateX(-${(imagesLength - 1) * 600}px)`;
  
  buttons[sliderNumber-1].style.backgroundColor = '';
  buttons[imagesLength-1].style.backgroundColor = 'white';
  sliderNumber = imagesLength;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(sliderNumber - 2) * 600}px)`;
  buttons[sliderNumber-1].style.backgroundColor = '';
  buttons[sliderNumber-2].style.backgroundColor = 'white';
   sliderNumber--;
};



right.addEventListener("click", () => {
  sliderNumber < imagesLength ? nextSlide() : firstSlide();
});
left.addEventListener("click", () => {
  sliderNumber > 1 ? prevSlide() : lastSlide();
});



for (let i=0 ; i < imagesLength; i++) {

  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = 'white';