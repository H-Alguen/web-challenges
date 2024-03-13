console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const bodyConatiner = document.body;

//Elements
const article = document.createElement("article");
article.classList.add("post");
const pText = document.createElement("p");
pText.classList.add("post__content");
pText.textContent = "Example Text by JS, Example Text2 by JS.";
const footer = document.createElement("footer");
footer.classList.add("post__footer");
const span = document.createElement("span");
span.classList.add("post__username");
span.textContent = "@mustermann";
const btn = document.createElement("button");
btn.classList.add("post__button");
btn.setAttribute("data-js", "like-button");
btn.setAttribute("type", "button");
btn.textContent = "♥ Like";

//Structure
footer.append(span, btn);
// footer.append(btn);
article.append(pText, footer);
// article.append(footer);
bodyConatiner.append(article);
