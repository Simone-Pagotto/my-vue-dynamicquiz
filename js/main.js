const app = new Vue ({
  el:'#root',
  data: {
    quizQuestions: [
      {
        question: 'What is 2*5 ?',
        quizAnswer: ['2','5','10','15','20'],
        indexCorrectAnswer: 2
      },
      {
        question: 'What is 3*6 ?',
        quizAnswer: ['3','6','9','12','18'],
        indexCorrectAnswer: 4
      },
      {
        question: 'What is 8*9 ?',
        quizAnswer: ['72','99','108','134','200'],
        indexCorrectAnswer: 0
      },
      {
        question: 'What is 1*7 ?',
        quizAnswer: ['4','5','16','7','8'],
        indexCorrectAnswer: 3
      },
      {
        question: 'What is 8*8 ?',
        quizAnswer: ['20','30','40','50','64'],
        indexCorrectAnswer: 4
      }
    ],
    userAnswer : [],
    correctAnswer: [],
    correctUserAnswer: 0,
    currentQuiz: 0

  },
  methods: {
    addAnswer: function(){
      for(let i=0; i<this.quizQuestions.length;i++){
        this.correctAnswer.push(this.quizQuestions[i].indexCorrectAnswer)
        if(this.userAnswer[i]===this.correctAnswer[i]){
          this.correctUserAnswer++;
        }
      }
    },
    moveNext: function(){
      this.currentQuiz++;
    },
    movePrev: function(){
      this.currentQuiz--;
    }
  }
})
