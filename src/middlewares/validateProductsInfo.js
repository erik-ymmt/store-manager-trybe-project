const { getValidIds } = require('../helpers/getValidProductsIds');

const validateProductsInfo = (req, res, next) => {
  const { name } = req.body;
  if (name === undefined) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.length < 5) {
    return res
      .status(422)
      .json({ message: '"name" length must be at least 5 characters long' });
  }
  return next();
};

const validadeDeleteId = async (req, res, next) => {
  const { id } = req.params;
  const validIds = await getValidIds();
  if (validIds.includes(id)) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return next();
};

module.exports = {
  validateProductsInfo,
  validadeDeleteId,
};
