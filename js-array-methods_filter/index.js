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
    tags: ["elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((card) => {
  const isCardIdTwo = card.id === "2";

  if (isCardIdTwo) {
    return true;
  } else {
    return false;
  }
});

console.log(onlyCardWithIdTwo);

const allCardsWith3Tags = cards.filter((card) => {
  const cardWith3Tags = card.tags.length > 2;
  if (cardWith3Tags) {
    return true;
  } else {
    return false;
  }
});

console.log(allCardsWith3Tags);

const allCardsThatAreNotBookmarked = cards.filter((card) => {
  // const isCardBookmarked = card.cardIsNotBookmarked;

  if (card.isBookmarked === true) {
    return false;
  } else {
    return true;
  }
});

console.log(allCardsThatAreNotBookmarked);

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((card) => {
  if (
    card.tags.includes("html") ||
    (card.tags.includes("js") && card.isBookmarked === true)
  ) {
    return true;
  } else {
    return false;
  }
});

console.log(allCardsWithTagsHTMLOrJSThatAreBookmarked);

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
