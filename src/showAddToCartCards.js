import products from "../public/api/product.json";
import { cartQuantityToggle } from "./cartQuantityToggle";
import { fetchActualDataFromLS } from "./fetchActualDataFromLS";
import { getCartDetailsFromLS } from "./getCartFromLS";
import { removeCartFromLS } from "./removeCartFromLS";
import { updateCartProductTotal } from "./updateCartProductTotal";

const productCartTemplate = document.querySelector(
  ".added-cart-section .product-card"
);

let cartProduct = getCartDetailsFromLS();

let filterProduct = products.filter((currProd) => {
  return cartProduct.some((currElem) => currProd.id === currElem.id);
});
const showCartProduct = () => {
  filterProduct.forEach((currFilterdProd) => {
    const { id, category, name, image, price, stock } = currFilterdProd;

    const productClone = document.importNode(productCartTemplate.content, true);

    const lSActualData = fetchActualDataFromLS(id, price);

    productClone.querySelector("#cardValue").setAttribute("id", `card-${id}`);

    productClone.querySelector(".lable").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone
      .querySelector(".productImage img")
      .setAttribute("src", `../${image}`);

    productClone.querySelector(".price").textContent = lSActualData.price;
    productClone.querySelector(".productQuantity").textContent =
      lSActualData.quantity;

    productClone
      .querySelector(".remove-from-cart")
      .addEventListener("click", (event) => {
        removeCartFromLS(event, id);
      });

    productClone
      .querySelector(".increase-decrease")
      .addEventListener("click", (event) => {
        cartQuantityToggle(event, id, stock, price);
      });

    productCartTemplate.append(productClone);
  });
};

showCartProduct();


updateCartProductTotal();
