export function renderProductCard(product) {
  // Get the container for products
  let productContainer = document.getElementById("productContainer");
  if (!productContainer) return;

  // Create a new card
  let card = document.createElement("div");
  let cardTitle = document.createElement("h2");
  let cardImage = document.createElement("img");
  let cardPrice = document.createElement("p");

  // Insert details into the card
  cardTitle.innerText = product.title;
  cardImage.src = product.thumbnail;
  cardPrice.innerText = product.price;

  card.appendChild(cardImage);
  card.appendChild(cardTitle);
  card.appendChild(cardPrice);

  productContainer.appendChild(card);
}

// Get the container for product details

export function renderProductDetails(product) {
  let productContainer = document.getElementById("productContainer");
  if (!productContainer) return;

  productContainer.innerHTML = ""; // Clear previous details

  let details = document.createElement("div");
  let detailsTitle = document.createElement("h2");
  let detailsImage = document.createElement("img");
  let detailsDescription = document.createElement("p");
  let detailsPrice = document.createElement("p");

  detailsTitle.innerText = product.title;
  detailsImage.src = product.thumbnail;
  detailsImage.alt = product.title;
  detailsDescription.innerText = product.description;
  detailsPrice.innerText = product.price + "kr.";

  details.appendChild(detailsImage);
  details.appendChild(detailsTitle);
  details.appendChild(detailsDescription);
  details.appendChild(detailsPrice);

  productContainer.appendChild(details);
}
export function renderProductCard(cartItems) {
  //Get the container for products items
  let productContainer = document.getElementById("productContainer");
  if (!productContainer) return;

  productContainer.innerHTML = ""; // Clear previous content
  
  //create cart header
  let cartHeader = document.createElement("h2");
  cartHeader.innerText = "Indkøbskurv";
  productContainer.appendChild(cartHeader);

  //check if cart is empty
  if (!cartItems || cartItems.length === 0) {
    let emptyMessage = document.createElement("p");
    emptyMessage.innerText = "Din indkøbskurv er tom";
    emptyMessage.className = "empty-cart-message";
    productContainer.appendChild(emptyMessage);
    return;
  }
