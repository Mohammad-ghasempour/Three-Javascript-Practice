const data = [
  {
    id: 1,
    question: "What is the capital of Norway?",
    answers: [
      { answer: "Oslo", isCorrect: true },
      { answer: "Stavanger", isCorrect: false },
      { answer: "Bergen", isCorrect: false },
      { answer: "Trondheim", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Which currency is the Norway currency?",
    answers: [
      { answer: "Euro", isCorrect: false },
      { answer: "Dollar", isCorrect: false },
      { answer: "Pound", isCorrect: false },
      { answer: "Krone", isCorrect: true },
    ],
  },
  {
    id: 3,
    question: "What is the population of Norway?",
    answers: [
      { answer: "1,422,687 (about the same as Maine)", isCorrect: false },
      { answer: "5,434,319 (almost that of Alabama)", isCorrect: true },
      { answer: "807,413 (similar to South Dakota)", isCorrect: false },
      {
        answer: "37,961,664 (approximately that of California)",
        isCorrect: false,
      },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");
const questionNumber = document.querySelector(".questionNumber");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const showQuestion = (qNumber) => {
  questionNumber.textContent = `${qIndex + 1} / ${data.length} `;
  if (qIndex === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) => ` <div class="answer">
<input type="radio" id=${index} name="answer" value=${item.isCorrect} />
<label for=${index}>${item.answer}</label>
</div>`
    )
    .join("");
  selectAnswer();
};

const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((element) => {
    element.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      qIndex++;
      showQuestion(qIndex);
    } else {
      alert("Please choose an answer!");
    }
  });
};

const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
  showQuestion(qIndex);
};

const showResult = () => {
  gameScreen.style.display = "none";
  resultScreen.style.display = "block";
  total = Math.round((100 / data.length) * correctCount);
  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct answer: ${correctCount}`;
  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong answer: ${wrongCount}`;
  resultScreen.querySelector(".score").textContent = `Score: ${total} %`;
};

play.addEventListener("click", () => {
  gameScreen.style.display = "block";
  resultScreen.style.display = "none";
  playAgain();
});

showQuestion(qIndex);
submitAnswer();
