const models = require('../models');

const listAllProducts = async () => {
  const allProducts = await models.productsModel.getAllProducts();
  return { error: null, products: allProducts, status: 200 };
};

const listProductById = async (id) => {
  const product = await models.productsModel.getProductById(id);
  if (product) {
    return { error: null, product, status: 200 };
  }
  return { error: true, product: 'Product not found', status: 404 };
};

module.exports = {
  listAllProducts,
  listProductById,
};