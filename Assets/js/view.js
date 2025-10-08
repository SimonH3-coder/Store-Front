export function renderProductCard(product) {
  // Price, description, thumbnail & title skal renderes
  let mainContainer = document.getElementById("mainContainer");
  if (!mainContainer) return;

  let card = document.createElement("div");
  let cardTitle = document.createElement("h2");
  let cardImage = document.createElement("img");
  let cardPrice = document.createElement("p");
  let cardDescription = document.createElement("p");

  cardTitle.innerText = product.title;
  cardImage.src = product.thumbnail;
  cardImage.alt = product.title;
  cardPrice.innerText = product.price + " DKK";
  cardDescription.innerText = product.description;

  card.appendChild(cardImage);
  card.appendChild(cardTitle);
  card.appendChild(cardDescription);
  card.appendChild(cardPrice);

  card.addEventListener("click", () => renderProductDetails(product));
  mainContainer.appendChild(card);
}

// Get the container for product details

export function renderProductDetails(product) {
  let mainContainer = document.getElementById("mainContainer");
  if (!mainContainer) return;

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

  mainContainer.appendChild(details);
}

export function renderCart(cartItems) {
  let mainContainer = document.getElementById("mainContainer");
  if (!mainContainer) return;

  mainContainer.innerHTML = "";
}
