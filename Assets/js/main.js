import { getProducts } from "./api.js";
import { getCategories } from "./api.js";
import { getProductById } from "./api.js";
import { renderProductCard } from "./view.js";
import { renderProductDetails } from "./view.js";

const productsData = await getProducts();
const categoriesData = await getCategories();
const singleProduct = await getProductById(1);

productsData.products.forEach((item) => {
  renderProductCard(item);
  //   renderProductDetails(item);
});

console.log(productsData);
console.log(categoriesData);
