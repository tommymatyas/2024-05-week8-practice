let charactersData = [];

const characterComponent = (name, height, mass, index, hairColor, eyeColor) => {
  return `
  <div class="character">
  <h2> Character ${index + 1} </h2>
  <h3> Data: </h3>
        <p class="name">${name}</p>
        <p class="height">${height} cm</p>
        <p class="mass">${mass} kg</p>

        <button class="more">Show more</button>
        <div class="more-data">
        <p class="hair-color">${hairColor}</p>
        <p class="eye-color">${eyeColor}</p>
        </div>
        </div>`;
};

const charactersComponent = (charactersData) => `
<div class="characters">
${charactersData
  .map((characterData, index) =>
    characterComponent(
      characterData.name,
      characterData.height,
      characterData.mass,
      index,
      characterData.hair_color,
      characterData.eye_color
    )
  )
  .join(" ")}
</div>`;

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const makeDomFromData = (data, rootElement) => {
  charactersData.push(...data.results);
  let charactersHtml = charactersComponent(charactersData);
  const buttonHtml = `<button class="fetch">Load more</button>`;

  rootElement.insertAdjacentHTML("beforeend", charactersHtml);
  const moreButtonElements = document.querySelectorAll("button.more");
  moreButtonElements.forEach((moreButtonElement) => {
    moreButtonElement.addEventListener("click", () => {
      moreButtonElement.classList.toggle("clicked");

      moreButtonElement.innerText === "Show more"
        ? (moreButtonElement.innerText = "Show less")
        : (moreButtonElement.innerText = "Show more");
    });
  });

  if (data.next) {
    rootElement.insertAdjacentHTML("beforeend", buttonHtml);

    const buttonElement = document.querySelector("button.fetch");
    buttonElement.addEventListener("click", async () => {
      buttonElement.innerText = "Loading next page...";
      buttonElement.disabled = true;

      const newData = await fetchData(data.next);
      rootElement.innerHTML = "";
      makeDomFromData(newData, rootElement);
    });
  }
};

const init = async () => {
  const data = await fetchData("https://swapi.dev/api/people/");
  const rootElement = document.querySelector("#root");
  makeDomFromData(data, rootElement);
};

init();

//chatGPT
/* 
let charactersData = [];

const characterComponent = (name, height, mass, index) => {
  return `
  <div class="character">
    <h2> Character ${index + 1} </h2>
    <h3> Data: </h3>
    <p class="name">${name}</p>
    <p class="height">${height} cm</p>
    <p class="mass">${mass} kg</p>
  </div>`;
};

const charactersComponent = (charactersData) => `
<div class="characters">
  ${charactersData
    .map((characterData, index) =>
      characterComponent(
        characterData.name,
        characterData.height,
        characterData.mass,
        index
      )
    )
    .join(" ")}
</div>`;

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const makeDomFromData = (data, rootElement) => {
  charactersData.push(...data.results);
  const charactersHtml = charactersComponent(charactersData);
  rootElement.innerHTML = charactersHtml;

  if (data.next) {
    observeElementForInfiniteScroll(data.next, rootElement);
  }
};

const observeElementForInfiniteScroll = (nextUrl, rootElement) => {
  const sentinel = document.createElement("div");
  sentinel.className = "sentinel";
  rootElement.appendChild(sentinel);

  const observer = new IntersectionObserver(
    async (entries) => {
      if (entries[0].isIntersecting) {
        observer.disconnect();
        const newData = await fetchData(nextUrl);
        makeDomFromData(newData, rootElement);
      }
    },
    { rootMargin: "200px" }
  );

  observer.observe(sentinel);
};

const init = async () => {
  const data = await fetchData("https://swapi.dev/api/people/");
  const rootElement = document.querySelector("#root");
  makeDomFromData(data, rootElement);
};

init();
 */
/* 
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
  fetchButtonElement.addEventListener("click", async () => {
    console.log("fetch next page");
    console.log(data.next);

    const newFetchResult = await fetch(data.next);
    console.log(newFetchResult);
    const newData = await newFetchResult.json();
    console.log(newData);
    const newCharacters = newData.results;
    console.log(newCharacters);

    rootElement.insertAdjacentHTML(
      "beforeend",
      charactersComponent(newCharacters)
    );

    fetchButtonElement.remove();
    rootElement.insertAdjacentHTML(
      "beforeend",
      `<button class="fetch">Load more...</button>`
    );
    const newFetchButtonElement = document.querySelector("button.fetch");
    fetchButtonElement.addEventListener("click", () => {
      console.log("fetch new data");
      console.log(newData.next);
    });

    // fetchButtonElement.remove();

    rootElement.insertAdjacentHTML(
      "beforeend",
      charactersComponent(newCharacters)
    );
  });
}

fetchData();
 */
