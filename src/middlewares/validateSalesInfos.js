const connection = require('../models/connection');

const getValidIds = async () => {
  const [validIds] = await connection.execute(
    'SELECT id FROM StoreManager.products',
  );

  const validIdsArray = [];
  validIds.forEach((element) => validIdsArray.push(element.id));

  return validIdsArray;
};

const validateSalesIds = async (req, res, next) => {
  const sales = req.body;
  const validIds = await getValidIds();
  const salesIds = sales.map((sale) => sale.productId);

  const verifyUndefinedId = salesIds.some((id) => id === undefined);
  if (verifyUndefinedId) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  const verifyValidIds = salesIds
    .map((id) => validIds.includes(id))
    .some((bool) => bool === false);
  if (verifyValidIds) {
    return res.status(404).json({ message: 'Product not found' });
  }

  return next();
};

const validateSalesQuantities = (req, res, next) => {
  const sales = req.body;
  const salesQuantities = sales.map((sale) => sale.quantity);

  const verifyUndefinedQuantity = salesQuantities.some((qtt) => qtt === undefined);
  if (verifyUndefinedQuantity) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  const verifyValidQuantity = salesQuantities.some((qtt) => qtt < 1);
  if (verifyValidQuantity) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  return next();
};

module.exports = {
  validateSalesIds,
  validateSalesQuantities,
};
