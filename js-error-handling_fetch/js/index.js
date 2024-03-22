console.clear();
/**
 * This is NOT the ONLY solution that works for this challenge
 */
const userElement = document.querySelector(".user");
const errorElement = document.querySelector(".error");

// console.info() is not part of the solution
// .info() works the same as console log
// I am using it here as an example of how I would inspect variables to get to the solution
// console.info() is here only for descriptive purposes
async function getUser(url) {
  userElement.innerHTML = ""; // clear previous user information
  errorElement.textContent = ""; // clear previous error

  const response = await fetch(url);
  console.info("response variable:", response); // we inspect response, focus on parameters "status" and "ok"
  if (!response.ok) {
    // we check if response is NOT ok, status >= 400 is not ok
    console.log("Network error");
    return null; // there is nothing to return
    // but our code expects to receive something so we return null
  }

  const json = await response.json(); // if response data is not in JSON format, this will throw an error
  return json.data;
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    try {
      const user = await getUser(event.target.dataset.url);
      console.info("user variable:", user); // we inspect the user variable
      if (!user) {
        // if user is null, then !null is the same as true, the condition for if is met
        errorElement.textContent = "User not found."; // no user data, so no user found
        return; // no user information to display, we end function here
      }

      userElement.innerHTML = `
      <h2>${user.first_name} ${user.last_name}</h2>
      <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
      `;
    } catch (error) {
      console.info(error); // we inspect the error variable
      errorElement.textContent = error.message; // all error objects have message property
      return; // invalid format, nothing to display, we end function here
    }
  })
);
