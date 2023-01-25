
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const allImages = document.querySelectorAll(".images");
const bottom = document.querySelector(".bottom");
let sliderNumber = 1;
const imagesLength = allImages.length;

const loadAllEventListener = () => {
  right.addEventListener("click", showNextSlide);
  left.addEventListener("click", showPrevSlide);
};



const resetBG = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};
const nextSlide = () => {
  slider.style.transform = `translateX(-${sliderNumber * 600}px)`;

  resetBG();
  buttons[sliderNumber].style.backgroundColor = "white";
  sliderNumber++;
};

const firstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  resetBG();
  sliderNumber = 1;
  buttons[sliderNumber - 1].style.backgroundColor = "white";
};

const lastSlide = () => {
  slider.style.transform = `translateX(-${(imagesLength - 1) * 600}px)`;

  resetBG();
  buttons[imagesLength - 1].style.backgroundColor = "white";
  sliderNumber = imagesLength;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(sliderNumber - 2) * 600}px)`;
  resetBG();
  buttons[sliderNumber - 2].style.backgroundColor = "white";
  sliderNumber--;
};

const showNextSlide = () => {
  sliderNumber < imagesLength ? nextSlide() : firstSlide();
};

const showPrevSlide = () => {
  sliderNumber > 1 ? prevSlide() : lastSlide();
};

for (let i = 0; i < imagesLength; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    slider.style.transform = `translateX(-${index * 600}px)`;
    resetBG();
    button.style.backgroundColor = "white";
  });
});

loadAllEventListener();
