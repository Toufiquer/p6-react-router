const getProductsByIds = (ids, products) => {
  const newProducts = [];
  for (let curr in ids) {
    let product = products.find((item) => item.id === curr);
    product.quantity = ids[curr];
    newProducts.push(product);
  }
  return newProducts;
};
const calculateTotalProduct = (allProducts) => {
  let data = allProducts.reduce((acc, curr) => {
    acc += Math.round(curr.quantity);
    return acc;
  }, 0);
  return data;
};
const calculateTotalAmount = (allProducts) => {
  let data = allProducts.reduce((acc, curr) => {
    acc += Math.round(curr.quantity) * Math.round(curr.price);
    return acc;
  }, 0);
  return data;
};
const calculateTax = (allProducts) => {
  return (calculateTotalAmount(allProducts) * 0.1).toFixed(2);
};
const calculateGrandTotal = (allProducts) => {
  let calculateTotal = calculateTotalAmount(allProducts);
  return (calculateTotal * 0.1 + calculateTotal).toFixed(2);
};
export { getProductsByIds, calculateTotalProduct, calculateTotalAmount, calculateTax, calculateGrandTotal };
