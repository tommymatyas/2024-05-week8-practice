// console.log("hello world");
const characterComponent = (name, height, mass) => {
  return `
  <div class="character">
        <p class="name">${name}</p>
        <p class="height">${height} cm</p>
        <p class="mass">${mass} kg</p>
        </div>`;
};

async function fetchData() {
  const fetchResult = await fetch("https://swapi.dev/api/people/");
  const data = await fetchResult.json();
  const characters = data.results; //characters = array[10]
  //   console.log(characters);

  const rootElement = document.querySelector("#root");
  let charactersHtml = "";

  /*   for (let i = 0; i < characters.length; i++) {
    console.log(characters[i].name);

    charactersHtml +=
      ("beforeend",
      `<div class="character">
        <p class="name">${characters[i].name}</p>
        <p class="height">${characters[i].height} cm</p>
        <p class="mass">${characters[i].mass} kg</p>
        </div>
        `);
  } */

  /*   characters.forEach((character) => {
    charactersHtml += `<div class="character">
        <p class="name">${character.name}</p>
        <p class="height">${character.height} cm</p>
        <p class="mass">${character.mass} kg</p>
        </div>`;
  }); */

  // TODO Homework do the above with MAP

  // rootElement.insertAdjacentHTML("beforeend", charactersHtml);

  rootElement.insertAdjacentHTML(
    "beforeend",
    characters
      .map((character) =>
        characterComponent(character.name, character.height, character.mass)
      )
      .join(" ")
  );

  // mindenhol elerheto a data a fetchData fuggvenyen barhol
}

fetchData();
/* 
fetch("https://swapi.dev/api/people/")
  .then((response) => response.json())
  .then((data) => console.log(data)); // csak a 2. then callback fugvenyben erheto el a data

 */
