// const camelize = require('camelize');
const connection = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const getProductById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id=?',
    [id],
  );
  console.log('result model: ', result);
  return result;
};

module.exports = {
  getAllProducts,
  getProductById,
};
