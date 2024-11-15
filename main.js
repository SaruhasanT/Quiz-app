const mcqCreateForm = document.querySelector(".mcq-create form");
const mcqQuestionInput = document.querySelector(
  ".mcq-create form #no__of__mcq__questions"
);
const mcqAnswerInput = document.querySelector(".mcq-create form .mcq__answers");
const addBtn = document.getElementById("add-btn");
const buildForm = document.querySelector(".mcq__build form");
const mcqContainer = document.querySelector(".mcq__container");
const questionNumberSpan = document.querySelector(".question__number");
const submitMcqBtn = document.querySelector(".submit__mcq");
const mcqButton = document.querySelector(".mcq__btn");
const selection = document.querySelector(".selection");
const mcqCreate = document.querySelector(".mcq-create");
const mcqBuild = document.querySelector(".mcq__build");
const ansInputs = document.querySelectorAll(".answers > div");
let mcqs = [];
mcqButton.addEventListener("click", () => {
  selection.style.display = "none";
  mcqCreate.style.display = "flex";
});
let numberOfMcq = 0;
let numberOfMcqAns = 0;
function myFunction() {
  console.log("function");
}
const a = 23;
function renderQuestions() {
  mcqContainer.innerHTML = "";
  mcqs.forEach((item, index) => {
    const html = document.createElement("div");
    html.className = `question__section question${index}`;
    html.innerHTML = `
          <p class="ques"><span>${item.questionNumber}.</span>${item.question}</p>
          <ol class="ans">
          </ol>
          <button class="delete__btn" onclick='console.log(a)'>Delete</button>
    `;
    mcqContainer.append(html);

    const ansHtml = document.querySelector(
      `.question__section.question${index} .ans`
    );
    item.answers.forEach((b, i) => {
      const span = document.createElement("li");
      span.innerHTML = b;
      ansHtml.append(span);
    });
  });
}

function enter(a) {
  console.log(a);
}
// Getting the number of questions and answers
mcqCreateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  numberOfMcq = parseInt(mcqQuestionInput.value);
  numberOfMcqAns = parseInt(mcqAnswerInput.value);
  mcqCreate.style.display = "none";
  mcqBuild.style.display = "flex";
  ansInputs.forEach((a, index) => {
    if (index + 1 > numberOfMcqAns) {
      a.style.display = "none";
    }
  });
});
const question = document.querySelector(".mcq__build #question");
const answers = document.querySelectorAll(".mcq__build .answers input");
const writeAnswer = document.querySelector(".mcq__build .right__answer");
let quesNumber = 1;
buildForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let temp = {};
  let ansArr = [];
  temp.questionNumber = quesNumber;
  temp.question = question.value;
  temp.rightAnswer = parseInt(writeAnswer.value);
  for (let i = 0; i < numberOfMcqAns; i++) {
    ansArr.push(answers[i].value);
  }
  temp.answers = ansArr;
  mcqs.push(temp);
  question.value = "";
  for (let i = 0; i < 5; i++) {
    answers[i].value = null;
  }
  quesNumber++;
  questionNumberSpan.innerText = quesNumber;
  renderQuestions();
});
const deleteButtons = document.querySelectorAll(".delete__btn");
deleteButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    mcqs.splice(index, 1);
    renderQuestions();
    console.log(btn);
  });
});
