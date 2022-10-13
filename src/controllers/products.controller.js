const services = require('../services');

const listProducts = async (_req, res) => {
  const list = await services.productService.listAllProducts();
  res.status(list.status).json(list.products);
};

const listProductById = async (req, res) => {
  const { id } = req.params;
  const list = await services.productService.listProductById(id);
  if (list.error) {
    return res.status(list.status).json({ message: list.product });
  }
  res.status(list.status).json(list.product);
};

const registerProduct = async (req, res) => {
  const product = req.body;
  const productResult = await services.productService.registerProduct(product);
    if (productResult.error) {
    return res.status(productResult.status).json({ message: productResult.message });
  }
  res.status(201).json(productResult);
};

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const product = { id, name };
  await services.productService.updateProduct(product);
  res.status(200).json(product);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await services.productService.deleteProduct(id);
  res.status(204).end();
};

module.exports = {
  listProducts,
  listProductById,
  registerProduct,
  updateProduct,
  deleteProduct,
};