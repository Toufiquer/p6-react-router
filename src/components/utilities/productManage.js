const getProductsByIds = (ids, products) => {
  const newProducts = [];
  for (let curr in ids) {
    let product = products.find((item) => item.id === curr);
    product.quantity = ids[curr];
    newProducts.push(product);
  }
  return newProducts;
};

export { getProductsByIds };
