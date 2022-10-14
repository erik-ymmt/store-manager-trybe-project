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
  return result;
};

const insertProduct = async (name) => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [name],
  );
  return { id: result.insertId, affectedRows: result.affectedRows };
};

const updateProduct = async (product) => {
  const [{ affectedRows }] = await connection.execute(
    `UPDATE StoreManager.products
    SET name=?
    WHERE id=?`,
    [product.name, product.id],
  );
  return { affectedRows };
};

const deleteProduct = async (id) => {
  const [{ affectedRows }] = await connection.execute(
    `DELETE FROM StoreManager.products
    WHERE id=?`,
    [id],
  );
  return { affectedRows };
};

const searchProduct = async (search) => {
  const [result] = await connection.execute(
    `SELECT * FROM StoreManager.products
    WHERE name LIKE ?`,
    [`%${search}%`],
  );

  return result;
};

module.exports = {
  getAllProducts,
  getProductById,
  insertProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
};
