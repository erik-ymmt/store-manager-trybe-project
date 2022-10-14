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

const registerProduct = async (product) => {
  const result = await models.productsModel.insertProduct(product);
  if (result.affectedRows === 1) {
    return { id: result.id, name: product.name };
  }
    return { error: true, message: 'Product not registered', status: 400 };
};

const updateProduct = async (product) => {
  const result = await models.productsModel.updateProduct(product);
    if (result.affectedRows === 1) {
    return result;
  }
  return { error: true, message: 'Something went wrong', status: 400 };
};

const deleteProduct = async (id) => {
  const result = await models.productsModel.deleteProduct(id);
    if (result.affectedRows === 1) {
    return result;
  }
  return { error: true, message: 'Something went wrong', status: 400 };
};

const searchProduct = async (search) => {
  const searchResults = await models.productsModel.searchProduct(search);
  return searchResults;
};

module.exports = {
  listAllProducts,
  listProductById,
  registerProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
};