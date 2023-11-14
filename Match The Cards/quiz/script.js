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
    question: 'What is the capital of Tunisia?',
    answers: [
      { text: 'Tunisia', correct: true },
      { text: 'Bizerte', correct: false },
      { text: 'Djerba', correct: false },
      { text: 'Beja', correct: false }
    ]
  },
  {
    question: 'Who is the president of the United States?',
    answers: [
      { text: 'Joe Biden', correct: true },
      { text: 'Hilary Clinton', correct: false },
      { text: 'Barack Obama', correct: false },
      { text: 'Donald Trump', correct: false }
    ]
  },
  {
    question: 'In which continent is Italy located?',
    answers: [
      { text: 'Africa', correct: false },
      { text: 'Europe', correct: true },
      { text: 'Asia', correct: false },
      { text: 'America', correct: false }
    ]
  },
  {
    question: 'What is the capital of Germany?',
    answers: [
      { text: 'Heidelberg', correct: false },
      { text: 'Berlin', correct: true },
      { text: 'Frankfurt', correct: false },
      { text: 'Achen', correct: false }
    ]
  }
]