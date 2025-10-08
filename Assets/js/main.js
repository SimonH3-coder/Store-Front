import { getProducts } from "./api.js";
import { getCategories } from "./api.js";
import { renderProductCard } from "./view.js";
import { renderProductDetails } from "./view.js";

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
