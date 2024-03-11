console.clear();
/*
Progress Bar

Build a progress bar that indicates how much the user has scrolled down the page.
For that:
 - change the starting width of the progressBar in the CSS file to 0%
 - write a function "calculateScrollPercentage" which calculates and returns in percent
   how far the user has scrolled down the page.
   Use the following attributes to achieve this:
    - window.scrollY: the Y position of the window on the total webpage
    - window.innerHeight: height of the window
    - document.body.clientHeight: height of the webpage

 - change the width of the progressBar whenever the user scrolls down or up. Use your
   function to calculate the current scroll percentage.

 (HINT: you can add a 'scroll' event listener to the document )
 (HINT: you can change the width of an element like this: element.style.width = '10px')
*/
// progressBar.style.width = 0;

const progressBar = document.querySelector('[data-js="progress-bar"]');

document.addEventListener("scroll",() => {
  const userPosition = window.scrollY;
  const userBrowserViewHeightPercentage = ((userPosition / (document.body.clientHeight -window.innerHeight))* 100) +"%";

  return progressBar.style.width = userBrowserViewHeightPercentage;
});



// function calculateScrollPercentage() {
//   const userBrowserHeight = document.body.clientHeight;
//   const userPosition = window.scrollY;

//   const scrollPercentage = (userPosition / (userBrowserHeight - window.innerHeight)) * 100;
//   const pogressBarUpdatePercentage = scrollPercentage +"%";
//   return progressBar.style.width = pogressBarUpdatePercentage;
// }

//New Solution
// const progressBar = document.querySelector('[data-js="progress-bar"]');
// document.addEventListener("scroll", refreshProgressBar);
// function refreshProgressBar() {
//   progressBar.style.width = calculateScrollPercentage() + "%";
// }
// function calculateScrollPercentage() {
//   const maxHeight = document.body.clientHeight;
//   const userPosition = window.scrollY;
//   const scrollPercentage =
//     (userPosition / (maxHeight - window.innerHeight)) * 100;
//   return scrollPercentage;
// }
