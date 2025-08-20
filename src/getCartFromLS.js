import { updateCartValue } from "./updateCartValue";

export const getCartDetailsFromLS = () => {
    let cartDetails = localStorage.getItem('cartDetails');
    if (!cartDetails) {
        return [];
    }

    cartDetails = JSON.parse(cartDetails);

    updateCartValue(cartDetails);

    return cartDetails;
};
