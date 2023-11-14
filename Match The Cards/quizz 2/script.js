const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const levelButton = document.getElementById('next-level')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    
    levelButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Which country border cameroon on tye west?',
    answers: [
      { text: 'nigeria', correct: true },
      { text: 'chad', correct: false },
      { text: 'Equatorial Guinea', correct: false },
      { text: 'The republic of Congo', correct: false }
    ]
  },
  {
    question: 'How many islands are there in Greece?',
    answers: [
      { text: 'between 1200 and 6000 ', correct: false },
      { text: 'less than 600', correct: false },
      { text: 'Between 600 and 1200', correct: false },
      { text: 'more than 6000', correct: false }
    ]
  },
  {
    question: 'What is the official language of Senegal?',
    answers: [
      { text: 'English', correct: false },
      { text: 'French', correct: true },
      { text: 'South African', correct: false },
      { text: 'Swahilien', correct: false }
    ]
  },
  {
    question: 'How long did France colonize Madagascar?',
    answers: [
      { text: '60', correct: false },
      { text: '64', correct: true },
      { text: '50', correct: false },
      { text: '87', correct: false }
    ]
  }
]