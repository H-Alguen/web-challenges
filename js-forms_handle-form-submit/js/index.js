console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;

  console.log(formElements.firstName.value);
  console.log(formElements.lastName.value);
  console.log(formElements.age.value);
  console.log(formElements.email.value);
  console.log(formElements.complaint.value);
  console.log(formElements.details.value);
  console.log(formElements.badness.value);
  console.log(formElements.orderDate.value);
  console.log(formElements.tos.checked);
  event.target.reset();
});
