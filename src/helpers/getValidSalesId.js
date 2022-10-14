const connection = require('../models/connection');

const getValidSalesIds = async () => {
  const [validIds] = await connection.execute(
    'SELECT id FROM StoreManager.sales',
  );

  const validIdsArray = [];
  validIds.forEach((element) => validIdsArray.push(element.id));

  return validIdsArray;
};

module.exports = {
  getValidSalesIds,
};