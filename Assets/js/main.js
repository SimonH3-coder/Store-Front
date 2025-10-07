import { getpProducts } from "./api.js";
import { renderProductCard } from "./view.js";

const productsData = await getpProducts();

productsData.products.forEach((item) => {
  renderProductCard(item);
});

console.log(productsData);
