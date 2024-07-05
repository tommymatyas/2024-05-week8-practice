const characterComponent = (name, height, mass) => {
  return `
  <div class="character">
  <h2> Character </h2>
  <h3> Data: </h3>
        <p class="name">${name}</p>
        <p class="height">${height} cm</p>
        <p class="mass">${mass} kg</p>
        </div>`;
};

const charactersComponent = (charactersData) => `
<div class="characters">
${charactersData
  .map((characterData) =>
    characterComponent(
      characterData.name,
      characterData.height,
      characterData.mass
    )
  )
  .join(" ")}
</div>`;

async function fetchData() {
  const fetchResult = await fetch("https://swapi.dev/api/people/");
  const data = await fetchResult.json();
  const characters = data.results;

  const rootElement = document.querySelector("#root");

  rootElement.insertAdjacentHTML("beforeend", charactersComponent(characters));
  rootElement.insertAdjacentHTML(
    "beforeend",
    `<button class="fetch">Load more...</button>`
  );
  const fetchButtonElement = document.querySelector("button.fetch");
  fetchButtonElement.addEventListener("click", () =>
    console.log("fetch next page")
  );
  console.log(data.next);
}

fetchData();
