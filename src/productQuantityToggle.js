export const productQuantityToggle = (event, id, stock) => {
  const currentCardElement = document.querySelector(`#card-${id}`);

  let productQuantity = parseInt(
    currentCardElement.querySelector(".productQuantity").textContent
  );

  if (event.target.id === "plus") {
    if (productQuantity < stock) {
      productQuantity++;
      //   console.log(productQuantity);
    } else if (productQuantity === stock) {
      productQuantity = stock;
    }
  }

  if (event.target.id === "minus") {
    if (productQuantity > 1) {
      productQuantity--;
    }
  }
  
  currentCardElement.querySelector(".productQuantity").textContent = productQuantity;

};
