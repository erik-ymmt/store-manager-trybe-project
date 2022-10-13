const connection = require('../models/connection');

const getValidIds = async () => {
  const [validIds] = await connection.execute(
    'SELECT id FROM StoreManager.products',
  );

  const validIdsArray = [];
  validIds.forEach((element) => validIdsArray.push(element.id));

  return validIdsArray;
};

module.exports = {
  getValidIds,
};