console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const formElements = event.target.elements;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  //Solution 1
  // const numA = Number(formElements.numberA.value);
  // const numB = Number(formElements.numberB.value);
  // const operatorCalc = formElements.operator.value;

  //Solution 2
  const numA = Number(data.numberA);
  const numB = Number(data.numberB);
  const operatorCalc = data.operator;

  if (operatorCalc === "addition") {
    result = add(numA, numB);
  } else if (operatorCalc === "subtraction") {
    result = subtract(numA, numB);
  } else if (operatorCalc === "multiplication") {
    result = multiply(numA, numB);
  } else if (operatorCalc === "division") {
    result = divide(numA, numB);
  }
  // console.log(numA);
  // console.log(numB);
  // console.log(operatorCalc);
  // console.log("Test");
  // console.log(result);

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
