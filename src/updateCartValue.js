export const updateCartValue = (arrLocalStorage) => {
    const cartVal = document.querySelector('.cart-num');
    cartVal.textContent = arrLocalStorage.length;
};
