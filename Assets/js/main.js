import { getProducts } from "./api.js";
import { getCategories } from "./api.js";
import { renderProductCard } from "./view.js";
import { renderProductDetails } from "./view.js";
import { getSearchResults } from "./api.js";

await getProducts().then((data) => {
  let products = data.products;

  products.forEach((product) => {
    renderProductCard(product);
  });
});

await getCategories().then((data) => {
  let categories = data;
  renderProductDetails(categories);
});

let searchBar = document.getElementById("search-bar");
let mainContainer = document.getElementById("mainContainer");
searchBar.addEventListener("input", async (event) => {
  let searchData = await getSearchResults(event.target.value);
  console.log(searchData);
  mainContainer.innerHTML = ""; // Clear previous search results
  searchData.products.forEach((product) => {
    renderProductCard(product);
  });
});
