const services = require('../services');

const listProducts = async (_req, res) => {
  const list = await services.productService.listAllProducts();
  console.log('list controller: ', list);
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

module.exports = {
  listProducts,
  listProductById,
};