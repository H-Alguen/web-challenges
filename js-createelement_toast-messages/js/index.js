console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const newToasterMessage = document.createElement("li");
  newToasterMessage.textContent = "New Toast Message";
  newToasterMessage.classList.add("toast-container__message");
  newToasterMessage.setAttribute("data-js", "toast-message");
  toastContainer.append(newToasterMessage);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "<li></li>";
});
