const recipes = [
  {
    title: "Crepes",
    duration: 60,
    ingredients: ["butter", "flour", "eggs", "milk", "salt"],
    servings: 3,
  },
  {
    title: "Scrambled Eggs",
    duration: 20,
    ingredients: ["eggs", "milk", "salt"],
    servings: 2,
  },
  {
    title: "Vegan Salmon",
    duration: 60 * 24 * 3, // 3 days
    ingredients: [
      "carrots",
      "olive oil",
      "nori sheets",
      "liquid smoke",
      "soy sauce",
    ],
    servings: 10,
  },
  {
    title: "Carrot Cake",
    duration: 120,
    ingredients: ["carrots", "flour", "eggs", "salt", "milk", "sugar"],
    servings: 10,
  },
];

/*
 1: `map` exercises
*/

//we want only the title if each recipe
// ['Crepes', ...]
const onlyTitles = recipes.map((recipe) => {
  const recipeTitle = recipe.title;
  return recipeTitle;
});
console.log("Recipe Titles:");
console.log(onlyTitles);

// ['Crepes (60min)', ...]
const titlesWithDuration = recipes
  .filter((recipe) => {
    if (recipe.duration) {
      return true;
    } else {
      return false;
    }
  })
  .map((recipe) => {
    const reciptTitleWithDuration =
      recipe.title + " (" + recipe.duration + "min)";
    return reciptTitleWithDuration;
  });
console.log("Title with Duration:");
console.log(titlesWithDuration);

// [20, 10, 432, 12]
const timePerServing = recipes.map((recipe) => {
  const servingTime = recipe.servings;
  return servingTime;
});
console.log("Serving Time:");
console.log(timePerServing);

// EXTRA:

// HINT: use first map() and then Array.prototype.join() with "method chaining" like so:
// myArray.map(...).join(', ');
// 'Crepes, Scrambled Eggs, ...'
const allTitlesInOneString = recipes
  .map((recipe) => {
    const recipeTitle = recipe.title;
    return recipeTitle;
  })
  .join(", ");
console.log("Titles in One String:");
console.log(allTitlesInOneString);

// For more information how to join an array,
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join#joining_an_array_four_different_ways

/*
 2: `filter` exercises
*/

const recipesThatOnlyTake60minutesOrLess = recipes.filter((recipe) => {
  if (recipe.duration <= 60) {
    return true;
  } else {
    return false;
  }
});
console.log("Recipes with less than 60 minutes:");
console.log(recipesThatOnlyTake60minutesOrLess);

const allRecipesWithMoreThan2Servings = recipes.filter((recipe) => {
  if (recipe.servings > 2) {
    return true;
  } else {
    return false;
  }
});
console.log("Recipes with more than 2 servings:");
console.log(allRecipesWithMoreThan2Servings);

const allRecipesWithTitlesLongerThan12Characters = recipes.filter((recipe) => {
  if (recipe.title.length > 12) {
    return true;
  } else {
    return false;
  }
});
console.log("Title with more than 12 characters:");
console.log(allRecipesWithTitlesLongerThan12Characters);

export {
  onlyTitles,
  titlesWithDuration,
  timePerServing,
  allTitlesInOneString,
  recipesThatOnlyTake60minutesOrLess,
  allRecipesWithMoreThan2Servings,
  allRecipesWithTitlesLongerThan12Characters,
};
