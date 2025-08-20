import { getCartDetailsFromLS } from "./getCartFromLS";
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";

export const removeCartFromLS = (event, id) => {
  let dataFromLS = getCartDetailsFromLS();

  dataFromLS = dataFromLS.filter((curProd) => curProd.id !== id);
  localStorage.setItem("cartDetails", JSON.stringify(dataFromLS));

  let removeDiv = document.querySelector(`#card-${id}`);
  if(removeDiv){
    removeDiv.remove();

    showToast('delete',id);
  }

  updateCartValue(dataFromLS);

  updateCartProductTotal();
};
