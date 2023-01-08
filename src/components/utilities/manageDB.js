import { fnUpdateCarts } from "../Products/Products";

const getItem = () => {
  let cart = {};
  let newCart = localStorage.getItem("p6-cart");
  if (newCart) {
    return JSON.parse(newCart);
  } else {
  }
  return cart;
};
const saveToDB = (item) => {
  let newItem = JSON.stringify(item);
  localStorage.setItem("p6-cart", newItem);
};
const increaseItem = (id) => {
  const cartItem = getItem();
  let quantity = cartItem[id];
  if (quantity) {
    cartItem[id] += 1;
  } else {
    cartItem[id] = 1;
  }
  saveToDB(cartItem);
  fnUpdateCarts();
};
const decreaseItem = (id) => {
  const cartItem = getItem();
  let quantity = cartItem[id];
  if (quantity === 1) {
    delete cartItem[id];
  } else if (quantity > 1) {
    cartItem[id] -= 1;
  }
  saveToDB(cartItem);
  fnUpdateCarts();
};
const deleteItem = (id) => {
  const cartItem = getItem();
  let quantity = cartItem[id];
  if (quantity >= 1) {
    delete cartItem[id];
  }
  saveToDB(cartItem);
  fnUpdateCarts();
};
const clearAllDB = () => localStorage.removeItem("p6-cart");

export { getItem, clearAllDB, increaseItem, decreaseItem, deleteItem };
