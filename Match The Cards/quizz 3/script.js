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
    
    levelButton.innerText = 'Congratulations you have won the GOLD award'
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
    question: 'What is the total population of Egypt approximately by 2022?',
    answers: [
      { text: '105 million', correct: true },
      { text: '100 million', correct: false },
      { text: '80 million', correct: false },
      { text: '90 million', correct: false }
    ]
  },
  {
    question: 'When were the 7 provinces of Nepal formed ?',
    answers: [
      { text: '20 September 2015', correct: true },
      { text: '20 September 2014', correct: false },
      { text: '20 October 2015', correct: false },
      { text: '20 October 2014', correct: false }
    ]
  },
  {
    question: 'What is the capital of Lebanon?',
    answers: [
      { text: 'Baalbek-Hermel', correct: false },
      { text: 'Beirut', correct: true },
      { text: 'Bekaa', correct: false },
      { text: 'Mont-Liban', correct: false }
    ]
  },
  {
    question: 'Who is the president of Nigeria?',
    answers: [
      { text: '	Muhammadu Buhari', correct: true },
      { text: 'Yemi Osinbajo', correct: false }
    ]
  }
]