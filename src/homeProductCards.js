import { addToCart } from "./addToCart";
import { productQuantityToggle } from "./productQuantityToggle";

const productContainer = document.querySelector(".checkouts");
const productTemplate = document.querySelector(".checkouts .container");

export const showProductContainer = (products) => {
  if (!products) {
    return false;
  }

  products.forEach((currProduct) => {
    const {
      id,
      name,
      category,
      price,
      originalPrice,
      stock,
      description,
      image,
    } = currProduct;

    const productClone = document.importNode(productTemplate.content, true);

    productClone.querySelector("#cardValue").setAttribute("id", `card-${id}`);

    productClone.querySelector(".lable").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    const base = import.meta.env.BASE_URL;
    productClone
      .querySelector(".productImage img")
      .setAttribute("src", `${base}${image}`);

    productClone.querySelector(".description").textContent = description;
    productClone.querySelector(".new-price").textContent = `₹${price}`;
    productClone.querySelector(
      ".original-price"
    ).textContent = `₹${originalPrice}`;
    productClone.querySelector(".stock-quantity").textContent = stock;

    productClone
      .querySelector(".quantity .increase-decrease")
      .addEventListener("click", (event) => {
        productQuantityToggle(event, id, stock);
      });

    productClone.querySelector(".add-to-cart").addEventListener("click", () => {
      addToCart(event, id, stock);
    });

    productTemplate.append(productClone);
  });
};
