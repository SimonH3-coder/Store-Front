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

// Get the container for product details

export function renderProductDetails(product) {
  // Get the container for products
  let productContainer = document.getElementById("productContainer");
  if (!productContainer) {
    console.error("Product container kunne ikke findes");
    return;
  }

  //   productContainer.innerHTML = productstoShow
  //     .slice(0, 3)
  //     .map(
  //       (product) => `
  //     <div class= "product-item" data-id="${product.id}">
  //     <img src="${product.thumbnail}" alt="${product.title}" loading="lazy">
  //     <h3>${product.title}</h3>
  //     <p class="price">$${product.price}</p>
  //     <p class="description">${product.description.substring(0, 100)}...</p>
  //     <p class="rating">Rating: ${product.rating} / 5</p>
  //     button class= "add-to-cart-btn" onclick="addToCart(${product.id})">
  //     Tilføj til kurv
  //     <button>
  //     </div>
  //     `
  //     )
  //     .join("");
  // }

  let details = document.createElement("div");
  let detailsTitle = document.createElement("h2");
  let detailsImage = document.createElement("img");
  let detailsDescription = document.createElement("p");
  let detailsPrice = document.createElement("p");

  detailsTitle.innerText = product.title;
  detailsImage.src = product.thumbnail;
  detailsImage.alt = product.title;
  detailsDescription.innerText = product.description;
  detailsPrice.innerText = product.price + "kr";

  details.appendChild(detailsImage);
  details.appendChild(detailsTitle);
  details.appendChild(detailsDescription);
  details.appendChild(detailsPrice);

  productContainer.appendChild(details);
}
