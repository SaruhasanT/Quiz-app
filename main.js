var mcqCreateForm = document.querySelector(".mcq-create form");
var mcqQuestionInput = document.querySelector(
  ".mcq-create form #no__of__mcq__questions"
);
var mcqAnswerInput = document.querySelector(".mcq-create form .mcq__answers");
var addBtn = document.getElementById("add-btn");
var buildForm = document.querySelector(".mcq__build form");
var mcqContainer = document.querySelector(".mcq__container");
var questionNumberSpan = document.querySelector(".question__number");
var submitMcqBtn = document.querySelector(".submit__mcq");
var mcqButton = document.querySelector(".mcq__btn");
var selection = document.querySelector(".selection");
var mcqCreate = document.querySelector(".mcq-create");
var mcqBuild = document.querySelector(".mcq__build");
var ansInputs = document.querySelectorAll(".answers > div");
var submitBtn = document.querySelector(".submit-btn");
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
var a = 23;
var deleteEl = (a) => {
  console.log(a);
};
let quesNumber = 1;
function renderQuestions() {
  mcqContainer.innerHTML = "";
  mcqs.forEach((item, index) => {
    var html = document.createElement("div");
    html.className = `question__section question${index}`;
    html.innerHTML = `
          <p class="ques"><span>${item.questionNumber}.</span>${item.question}</p>
          <ol class="ans">
          </ol>
    `;
    mcqContainer.append(html);
    var questionSection = document.querySelector(
      `.question__section.question${index}`
    );
    var ansHtml = document.querySelector(
      `.question__section.question${index} .ans`
    );
    item.answers.forEach((b, i) => {
      var span = document.createElement("li");
      span.innerHTML = b;
      ansHtml.append(span);
    });
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete__btn";
    deleteButton.addEventListener("click", () => {
      mcqs.splice(index, 1);
      quesNumber--;
      questionNumberSpan.innerText = quesNumber;
      renderQuestions();
    });
    questionSection.append(deleteButton);
  });
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
var question = document.querySelector(".mcq__build #question");
var answers = document.querySelectorAll(".mcq__build .answers input");
var writeAnswer = document.querySelector(".mcq__build .right__answer");
buildForm.addEventListener("submit", (e) => {
  if (quesNumber <= numberOfMcq) {
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
  } else {
    return "";
  }
  if (quesNumber > numberOfMcq) {
    addBtn.style.cursor = "not-allowed";
    submitBtn.style.display = "block";
  }
});
var deleteButtons = document.querySelectorAll(".delete__btn");
deleteButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    mcqs.splice(index, 1);
    renderQuestions();
    console.log(btn);
  });
});
