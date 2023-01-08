import { decreaseItem, deleteItem, increaseItem } from "./manageDB";

const handleAddToCart = (id) => {
  increaseItem(id);
};
const handleRemoveFromCart = (id) => {
  decreaseItem(id);
};
const handleIncreaseQuantity = (id) => {
  increaseItem(id);
};
const handleDecreaseQuantity = (id) => {
  decreaseItem(id);
};
const handleDeleteItem = (id) => {
  deleteItem(id);
};
export { handleAddToCart, handleDecreaseQuantity, handleIncreaseQuantity, handleRemoveFromCart, handleDeleteItem };
