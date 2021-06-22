(function () {
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for (letter in currentQuestion.answers) {

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults() {

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'darkgreen';
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = 'crimson';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `Score: ${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "1. In a decomposition reaction,",
      answers: {
        a: "one of the rectants is often water",
        b: "energy in the form of heat or light is often produced",
        c: "the rectants are usually are a metal or non-metal",
        d: "the reactants is usually two ionic compunds in aqueous solution"
      },
      correctAnswer: "b"
    },
    {
      question: "2. The chemical equation, KClO3 -> KCl + O2, is an example of whuch type of reaction?",
      answers: {
        a: "Double Displacement",
        b: "Single Displacement",
        c: "Combustion",
        d: "Decompostion"
      },
      correctAnswer: "d"
    },
    {
      question: "3. In the following chemical reaction, what product is represented by X? AlCl3  +  NaOH  ->  X  +  NaCl",
      answers: {
        a: "AlOH",
        b: "Al(OH)3",
        c: "Al3OH",
        d: "It cannot be determined."
      },
      correctAnswer: "b"
    },
    {
      question: "4. Combination reactions always:",
      answers: {
        a: "involve an element and an ionic compound",
        b: "use only one reactant",
        c: "require oxygen gas",
        d: "form only one product"
      },
      correctAnswer: "d"
    },
    {
      question: "5. Which of the following is an example of a chemical reaction?",
      answers: {
        a: "The break down of food into energy",
        b: "Photosynthesis in plants",
        c: "Metal rusting",
        d: "All of the above"
      },
      correctAnswer: "d"
    },
    {
      question: "6. What kind of chemical reaction is where two substances combine to make a new substance?",
      answers: {
        a: "Synthesis reaction",
        b: "Decomposition reaction",
        c: "Combustion",
        d: "Photochemical reaction"
      },
      correctAnswer: "a"
    },
    {
      question: "7. What does a catalyst do to a chemical reaction?",
      answers: {
        a: "Stops the reaction",
        b: "Starts the reaction",
        c: "Speeds up the rate of reaction",
        d: "Slows down the rate of reaction"
      },
      correctAnswer: "c"
    },
    {
      question: "8. Oxidation is a process which involves",
      answers: {
        a: "addition of oxygen",
        b: "addition of hydrogen",
        c: "removal of oxygen",
        d: "removal of hydrogen"
      },
      correctAnswer: "a"
    },
    {
      question: "9. The process of reduction involves",
      answers: {
        a: "addition of oxygen",
        b: "addition of hydrogen",
        c: "removal of oxygen",
        d: "removal of hydrogen"
      },
      correctAnswer: "b"
    },
    {
      question: "10. What type of chemical reactions take place when electricity is passed through water?",
      answers: {
        a: "Displacement",
        b: "Combination",
        c: "Decomposition",
        d: "Double displacement"
      },
      correctAnswer: "c"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();