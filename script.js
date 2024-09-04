let btnQuestion = document.querySelector('.accordion-body');
let btnQuestionTow = document.querySelector('.tow-ab');
let btnQuestionThree = document.querySelector('.three-ab');
let btnAnswer = document.querySelector('.answs-bx .answ-bx');
let btnAnswerTow = document.querySelector('.answs-bx .tow');
let btnAnswerThree = document.querySelector('.answs-bx .three');

btnAnswer.addEventListener('click', () => {
    btnQuestion.classList.toggle('show-ques');
})
btnAnswerTow.addEventListener('click', () => {
    btnQuestionTow.classList.toggle('show-ques-tow');
})
btnAnswerThree.addEventListener('click', () => {
    btnQuestionThree.classList.toggle('show-ques-tow');
})