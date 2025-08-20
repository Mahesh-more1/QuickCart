import { getCartDetailsFromLS } from "./getCartFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartDetailsFromLS();

export const addToCart = (evet, id, stock) => {
  let arrLocalStorage = getCartDetailsFromLS();

  const currentCardElement = document.querySelector(`#card-${id}`);

  let productPrice = currentCardElement
    .querySelector(".new-price")
    .textContent.replace("₹", "");
  let productQuantity = parseInt(
    currentCardElement.querySelector(".productQuantity").textContent
  );

  let existingProduct = arrLocalStorage.find((currProd) => currProd.id === id);

  if (existingProduct && productQuantity > 1) {
    productQuantity = existingProduct.productQuantity + productQuantity;
    productPrice = productPrice * productQuantity;

    let updatedCart = { id, productQuantity, productPrice };

    updatedCart = arrLocalStorage.map((currProd) => {
      return currProd.id === id ? updatedCart : currProd;
    });

    localStorage.setItem("cartDetails", JSON.stringify(updatedCart));

    showToast("add", id);
  }

  // if (existingProduct) {
  //   return false;
  // }

  productPrice = Number(productQuantity * productPrice.replace("₹", ""));

  arrLocalStorage.push({ id, productQuantity, productPrice });
  localStorage.setItem("cartDetails", JSON.stringify(arrLocalStorage));

  updateCartValue(arrLocalStorage);

  showToast
  ("add", id);
};
