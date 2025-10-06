// Global variables
let products = [];
let cart = [];
let filteredProducts = [];

// Fetch produkter fra API
async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("HTTP error! status: ${response.status}");
    }
    const data = await response.json();
    products = data.products;
    filteredProducts = products;
    displayProducts(products);
    console.log("products loaded:", data);
  } catch (error) {
    console.error("error fetching products:", error);
    // Fejl ved statisk produkter ved API fejl
    const varer = ["Produkt 1", "Produkt 2", "Produkt 3"];
    displayProducts(varer);
  }
}
