import { getCartDetailsFromLS } from "./getCartFromLS";

export const updateCartProductTotal = () => {
  let productsSubTotal = document.querySelector(
    ".total-section .sub-total .sub-total-price"
  );
  let productsFinalTotal = document.querySelector(
    ".total-section .total .final-total"
  );
  let taxOnAll = document.querySelector(".total-section .taxing .tax");

  let DataFromLS = getCartDetailsFromLS();
  let initialValue = 0;

  let totalProductPrice = DataFromLS.reduce((accumulator, currElem) => {
    let productPrice = parseInt(currElem.productPrice) || 0;
    return accumulator + productPrice;
  }, initialValue);

  //   return totalProductPrice;
  let tax = taxOnAll.textContent.replace("₹", "");
  productsSubTotal.textContent = `₹${totalProductPrice}`;
  productsFinalTotal.textContent = `₹${totalProductPrice + Number(tax)}`;
};
