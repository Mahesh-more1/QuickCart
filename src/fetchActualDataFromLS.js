import { getCartDetailsFromLS } from "./getCartFromLS";

export const fetchActualDataFromLS = (id, price) => {
  let actualData = getCartDetailsFromLS();

  let existingProd = actualData.find((curElem) => curElem.id === id);
  let quantity = 1;
  if (existingProd) {
    quantity = existingProd.productQuantity;
    price = existingProd.productPrice;
  }
  return { quantity, price };
};
