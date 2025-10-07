export function renderProductCard(product) {
  // Get the container for products
  let productContainer = document.getElementById("productContainer");

  // Creat a new card
  let card = document.createElement("div");
  let cardTitle = document.createElement("h2");
  let cardImage = document.createElement("img");
  let cardPrice = document.createElement("p");

  // Inser details into the card
  cardTitle.innerText = product.title;
  cardImage.src = product.thumbnail;
  cardPrice.innerText = product.price;

  card.appendChild(cardImage);
  card.appendChild(cardTitle);
  card.appendChild(cardPrice);

  productContainer.appendChild(card);
}

export function renderProductDetails(product) {
  // Get the container for products
  let productContainer = document.getElementById("productContainer");

  // Creat a new card
  let card = document.createElement("div");
  let cardTitle = document.createElement("h2");
  let cardImage = document.createElement("img");
  let cardPrice = document.createElement("p");

  // Inser details into the card
  cardTitle.innerText = product.title;
  cardImage.src = product.thumbnail;
  cardPrice.innerText = product.price;

  card.appendChild(cardImage);
  card.appendChild(cardTitle);
  card.appendChild(cardPrice);

  productContainer.appendChild(card);
}
