const app = new Vue ({
  el:'#root',
  data: {
    quizQuestions: [
      {
        question: 'What is 2*5 ?',
        quizAnswer: ['2','5','10','15','20'],
        indexCorrectAnswer: 3
      },
      {
        question: 'What is 3*6 ?',
        quizAnswer: ['3','6','9','12','18'],
        indexCorrectAnswer: 5
      },
      {
        question: 'What is 8*9 ?',
        quizAnswer: ['72','99','108','134','200'],
        indexCorrectAnswer: 1
      },
    ],
    userAnswer : []
  }
})
