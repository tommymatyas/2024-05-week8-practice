/* console.log("hello world");

async function fetchData() {
  const fetchResult = await fetch("https://swapi.dev/api/people/");
  const data = await fetchResult.json();
  console.log(data);
  // mindenhol elerheto a data a fetchData fuggvenyen barhol
}

fetchData();

fetch("https://swapi.dev/api/people/")
  .then((response) => response.json())
  .then((data) => console.log(data)); // csak a 2. then callback fugvenyben erheto el a data
 */

const rootElement = document.querySelector("#root");
rootElement.insertAdjacentHTML(
  "beforeend",
  `
        <h1>Welcome to our simple web app!</h1>
    <div>
      <p>sziasztok</p>
      <button>gomb</button>
    </div>
    `
);

const bodyElement = document.querySelector("body");
console.log(bodyElement);

bodyElement.insertAdjacentHTML("beforeend", "<h2>hello world</h2>");
