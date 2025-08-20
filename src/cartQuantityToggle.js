import { getCartDetailsFromLS } from "./getCartFromLS";
import { productQuantityToggle } from "./productQuantityToggle";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const cartQuantityToggle = (event, id, stock, price) => {
  const currentCardElement = document.querySelector(`#card-${id}`);
  const productprice = currentCardElement.querySelector(".price");
  const productquantity = currentCardElement.querySelector(".productQuantity");

  let productQuantity = 1,
    localStoragePrice = 0;

  // get DataFrom LS
  let DataFromLS = getCartDetailsFromLS();
  let existingProduct = DataFromLS.find((currProd) => currProd.id === id);

  if (existingProduct) {
    productQuantity = existingProduct.productQuantity;
    localStoragePrice = existingProduct.productPrice;
  } else {
    localStoragePrice = price;
    price = price;
  }

  if (event.target.id === "plus") {
    if (productQuantity < stock) {
      productQuantity++;
    } else if (productQuantity === stock) {
      productQuantity = stock;
    }
  }

  if (event.target.id === "minus") {
    if (productQuantity > 1) {
      productQuantity--;
    }
  }

  localStoragePrice = Number(price * productQuantity);

  let updateCart = { id, productQuantity, productPrice: localStoragePrice };

  updateCart = DataFromLS.map((currProd) => {
    return currProd.id === id ? updateCart : currProd;
  });

  localStorage.setItem("cartDetails", JSON.stringify(updateCart));

  updateCartProductTotal();

  productprice.textContent = `₹${localStoragePrice}`;
  productquantity.textContent = productQuantity;
};
