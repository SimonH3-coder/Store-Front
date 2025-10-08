//Lave en funktion der kan hente data
export async function getProducts(count) {
  let url = "https://dummyjson.com/products";
  let res = await fetch(url);
  let data = await res.json();
  return data;
}

export async function getCategories() {
  let url = "https://dummyjson.com/products/categories";
  let res = await fetch(url);
  let data = await res.json();
  return data;
}

export async function getProductById(id) {
  let url = "https://dummyjson.com/products/" + id;
  let res = await fetch(url);
  let data = await res.json();
  return data;
}

export async function searchProducts(query) {
  let url = "https://dummyjson.com/products/search?q=" + query;
  let res = await fetch(url);
  let data = await res.json();
  return data;
}
