export async function getpProducts() {
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
