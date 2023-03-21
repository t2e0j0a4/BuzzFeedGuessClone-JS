let questionsBlock = document.querySelector("#questions");
let answersBlock = document.querySelector("#answers");

let allQuestions = [
  {
    id: 0,
    question: "Best Dum Biryani in India ?",
    options: [
      {
        imgUrl: "./Images/Hyderabad.jpg",
        imgText: "Hyderabad",
        imgAltText: "Img:Hyderabad",
      },
      {
        imgUrl: "./Images/Mumbai.jpg",
        imgText: "Mumbai",
        imgAltText: "Img:Mumbai",
      },
      {
        imgUrl: "./Images/Chennai.jpg",
        imgText: "Chennai",
        imgAltText: "Img:Chennai",
      },
      {
        imgUrl: "./Images/Banglore.jpg",
        imgText: "Banglore",
        imgAltText: "Img:Banglore",
      },
    ],
  },
  {
    id: 1,
    question: "What Indian Parents always forces their children to become ?",
    options: [
      {
        imgUrl: "./Images/Engineer.jpg",
        imgText: "Engineer",
        imgAltText: "Img:Engineer",
      },
      {
        imgUrl: "./Images/Doctor.jpeg",
        imgText: "Doctor",
        imgAltText: "Img:Doctor",
      },
      {
        imgUrl: "./Images/Lawyer.webp",
        imgText: "Lawyer",
        imgAltText: "Img:Lawyer",
      },
      {
        imgUrl: "./Images/Artist.jpg",
        imgText: "Artist",
        imgAltText: "Img:Artist",
      },
    ],
  },
];

const mostOfConsiderations = [
  {
    considerations: ["Hyderabad", "Engineer"],
    imageUrl: "./Images/Cool.webp",
    imageAlt: "Cool",
    imageText: "Cool",
  },
  {
    considerations: ["Hyderabad", "Doctor"],
    imageUrl: "./Images/Laugh.webp",
    imageAlt: "Laugh",
    imageText: "Laugh",
  },
  {
    considerations: ["Hyderabad", "Lawyer"],
    imageUrl: "./Images/Sad.webp",
    imageAlt: "Sad",
    imageText: "Sad",
  },
  {
    considerations: ["Hyderabad", "Artist"],
    imageUrl: "./Images/Cool.webp",
    imageAlt: "Cool",
    imageText: "Cool",
  },
  {
    considerations: ["Mumbai", "Engineer"],
    imageUrl: "./Images/Laugh.webp",
    imageAlt: "Laugh",
    imageText: "Laugh",
  },
  {
    considerations: ["Mumbai", "Doctor"],
    imageUrl: "./Images/Sad.webp",
    imageAlt: "Sad",
    imageText: "Sad",
  },
  {
    considerations: ["Mumbai", "Lawyer"],
    imageUrl: "./Images/Cool.webp",
    imageAlt: "Cool",
    imageText: "Cool",
  },
  {
    considerations: ["Mumbai", "Artist"],
    imageUrl: "./Images/Laugh.webp",
    imageAlt: "Laugh",
    imageText: "Laugh",
  },
  {
    considerations: ["Chennai", "Engineer"],
    imageUrl: "./Images/Sad.webp",
    imageAlt: "Sad",
    imageText: "Sad",
  },
  {
    considerations: ["Chennai", "Doctor"],
    imageUrl: "./Images/Cool.webp",
    imageAlt: "Cool",
    imageText: "Cool",
  },
  {
    considerations: ["Chennai", "Lawyer"],
    imageUrl: "./Images/Laugh.webp",
    imageAlt: "Laugh",
    imageText: "Laugh",
  },
  {
    considerations: ["Chennai", "Artist"],
    imageUrl: "./Images/Sad.webp",
    imageAlt: "Sad",
    imageText: "Sad",
  },
  {
    considerations: ["Banglore", "Engineer"],
    imageUrl: "./Images/Cool.webp",
    imageAlt: "Cool",
    imageText: "Cool",
  },
  {
    considerations: ["Banglore", "Doctor"],
    imageUrl: "./Images/Laugh.webp",
    imageAlt: "Laugh",
    imageText: "Laugh",
  },
  {
    considerations: ["Banglore", "Lawyer"],
    imageUrl: "./Images/Sad.webp",
    imageAlt: "Sad",
    imageText: "Sad",
  },
  {
    considerations: ["Banglore", "Artist"],
    imageUrl: "./Images/Cool.webp",
    imageAlt: "Cool",
    imageText: "Cool",
  },
];

let choosenAnswers = [];
let unansweredQuestions = [];

const questionsDisplay = () => {

  // Questions Block Creation
  allQuestions.forEach((q) => {
  
    // Question & Answer Block
    let questionOptionBlock = document.createElement("div");
    questionOptionBlock.classList.add("question-options");
    
    // Question Block 
    let questionBlock = document.createElement('div');
    questionBlock.classList.add('question-block');
    questionBlock.id = q.id;

    unansweredQuestions.push(q.id);

    // Question Text
    let questionText = document.createElement('h2');
    questionText.classList.add('question-text');
    questionText.innerText = 'Q. ' + q.question;

    // Question Text in Question Block
    questionBlock.append(questionText);

    // Options Block to populate options
    let optionsBlock = document.createElement('div');
    optionsBlock.classList.add('options-block');

    let optionId = 1;
    // Options Block Creation
    q.options.forEach((option) => {

      // Option Block
      let eachOptionBlock = document.createElement('div');
      eachOptionBlock.classList.add('option-block',`option-block-${q.id}`);
      eachOptionBlock.id = `option-${q.id}${optionId}`;
      optionId++;

      // Option Properties Define
      let optionRelImg = document.createElement('img');
      optionRelImg.classList.add('option-image');
      optionRelImg.setAttribute('src', option.imgUrl);
      optionRelImg.setAttribute('alt', option.imgAltText);
      let optionRelText = document.createElement('p');
      optionRelText.classList.add('option-text');
      optionRelText.textContent = option.imgText;

      eachOptionBlock.addEventListener('click', function() {
        optionClick(q.id, option.imgText, this);
      });

      // Population each option with option props
      eachOptionBlock.append(optionRelImg, optionRelText);

      // Populating options block with each option
      optionsBlock.append(eachOptionBlock);
    })

    // Question block & options block in each question option block
    questionOptionBlock.append(questionBlock, optionsBlock);

    // Populating all the question block & options block in question and option block
    questionsBlock.append(questionOptionBlock);
  })

}

questionsDisplay();

// Function runs when a option is clicked

function optionClick(questionId, choosenOption, thisEle) {
  if (unansweredQuestions.includes(questionId)) {
    choosenAnswers.push(choosenOption);
    let indexOfAnsweredQuestion = unansweredQuestions.indexOf(questionId);
    unansweredQuestions.splice(indexOfAnsweredQuestion,1);

    allQuestions.forEach((question) => {
      if (question.id === questionId) {
        Array.from(document.querySelectorAll(`.option-block-${questionId}`)).forEach((option) => {
          if (option.id === thisEle.id) {
            option.classList.add('selectedOption');
          }
          else {
            option.removeEventListener('click', optionClick);
            option.classList.add('disabledOption');
          }
        })
      }
    })

    // Function for scrolling to not answered top question.
    scrollToNotAnsweredQuestion();

  }
};

function scrollToNotAnsweredQuestion(){
  let topNotAnsweredQuestionId = Math.min(...unansweredQuestions);
  location.href = `#${topNotAnsweredQuestionId}`;
  if (topNotAnsweredQuestionId === Infinity) {
    showAnswer();
  }
}

function showAnswer() {
  location.href = '#answers';

  let answerBlock = document.createElement('div');
  answerBlock.classList.add('answer-block');
  
  let answerText = document.createElement('p');
  answerText.classList.add('answer-text');
  
  let answerEmoji = document.createElement('img');
  answerEmoji.classList.add('answer-emoji');

  mostOfConsiderations.forEach((option)=>{
    const {considerations} = option;
    if ((choosenAnswers[0] === considerations[0] && choosenAnswers[1] === considerations[1]) || (choosenAnswers[0] === considerations[1] && choosenAnswers[1] === considerations[0]) ) {
      answerText.innerText = option.imageText;
      answerEmoji.setAttribute('src', option.imageUrl);
      answerEmoji.setAttribute('alt', option.imageAlt);
    }
  })

  answerBlock.append(answerText, answerEmoji);
  answersBlock.append(answerBlock);
}

function resetEverything() {
  allQuestions.forEach((question) => {
    Array.from(document.querySelectorAll(`.option-block-${question.id}`)).forEach((option) => {
        option.classList.remove('selectedOption', 'disabledOption');
      });
    });

    unansweredQuestions = [];
    choosenAnswers = [];

    document.querySelector('#questions').innerHTML = "";
    document.querySelector('#answers').innerHTML = "";

    location.href = '#questions';

    questionsDisplay();
}