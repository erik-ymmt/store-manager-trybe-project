const connection = require('../models/connection');

const getValidIds = async () => {
  const [validIds] = await connection.execute(
    'SELECT id FROM StoreManager.products',
  );

  const validIdsArray = [];
  validIds.forEach((element) => validIdsArray.push(element.id));

  return validIdsArray;
};

const validateSalesInfos = async (req, res, next) => {
  const sales = req.body;
  const validIds = await getValidIds();

  sales.forEach((element) => {
    if (!element.productId) {
      return res.status(400).json({ message: '"productId" is required' });
    }
    if (!validIds.includes(element.productId)) {
      return res.status(404).json({ message: 'Product not found' });
    }
    if (element.quantity === undefined) {
      return res.status(400).json({ message: '"quantity" is required' });
    }
    if (element.quantity < 1) {
      return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    }
  });
  return next();
};

module.exports = {
  validateSalesInfos,
};