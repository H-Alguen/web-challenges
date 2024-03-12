console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;

  // --v-- write your code here --v--
  console.log(formElements.tos.checked);

  if (formElements.tos.checked === false) {
    tosError.innerHTML = showTosError();
  } else {
    tosError.innerHTML = hideTosError();
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

tosCheckbox.addEventListener("input", (event) => {
  const checkBox = event.target;
  if (checkBox.checked === false) {
    showTosError();
  } else {
    hideTosError();
  }
});
