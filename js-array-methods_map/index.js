console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

const lowerCaseAnswers = cards.map((card) => {
  const lowerCaseAnswerText = card.answer.toLowerCase();
  return lowerCaseAnswerText;
});

console.log(lowerCaseAnswers);

// ["How often can I use <header>? - As often as you like.", ...]
const questionsAndAnswersTogether = cards.map((card) => {
  const questionsAndAnswersTogetherText = card.question + " - " + card.answer;
  return questionsAndAnswersTogetherText;
});

console.log(questionsAndAnswersTogether);

// [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]
const questionAndAnswer = cards.map((card) => {
  // const questionAndAnswerText =
  //   "{ question: " + card.question + " - " + "answer: " + card.answer + "}";
  const questionAndAnswerText = {
    question: card.question,
    answer: card.answer,
  };
  return questionAndAnswerText;
});

console.log(questionAndAnswer);

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
