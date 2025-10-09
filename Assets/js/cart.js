export function renderCart(cartItems) {
  let mainContainer = document.getElementById("mainContainer");
  if (!mainContainer) return;

  mainContainer.innerHTML = ""; // Clear previous cart items
  cartItems.forEach((item) => {
    let cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    let itemTitle = document.createElement("h3");
    let itemPrice = document.createElement("p");
    itemTitle.innerText = item.title;
    itemPrice.innerText = item.price + " DKK";
    cartItem.appendChild(itemTitle);
    cartItem.appendChild(itemPrice);
    mainContainer.appendChild(cartItem);
  });
}

const product = [
  {
    id: 0,
    Image: "image/product-1.jpg",
    title: "Product 1",
    price: 100,
  },
  {
    id: 1,
    Image: "image/product-2.jpg",
    title: "Product 2",
    price: 200,
  },
  { id: 2, Image: "image/product-3.jpg", title: "Product 3", price: 300 },
  {
    id: 3,
    Image: "image/product-4.jpg",
    title: "Product 4",
    price: 400,
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.getElementById("root").innerHTML = categories.map((item) => {
  var { image, title, price } = item;
  return (
    `<div class='box'>
        div class='img-box'>
            <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>` +
    "<button onclick='addtocart(" +
    i++ +
    ")'>Add to cart</button>" +
    `</div>
        </div>`
  );
});
join("");

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  cart.push({ ...categories[a] });
  displaycart();
}

function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart(a) {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = "$ " + total + ".00";
        return (
          `<div class='cart-item'>
                <div class='row-img'>
                    <img class='images' src=${image}></img>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>$ ${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}
