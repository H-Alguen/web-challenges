console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(
    data.results
      .filter((character) => {
        return character.name === "R2-D2";
      })
      .map((element) => {
        //   console.log(element);
        console.log(element.name);
        console.log(element.eye_color);
      })
  );
  //   data.forEach((element, i) => {
  //     console.log(element[i]);
  //   });
}

fetchData();
