const camelize = require('camelize');
const connection = require('./connection');

const insertSale = async (sale) => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW())',
  );

  const saleId = result.insertId;

  sale.forEach((element) => {
    connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [saleId, element.productId, element.quantity],
    );
  });

  return saleId;
};

const getSales = async () => {
  const [allSales] = await connection.execute(
    `SELECT s.id AS sale_id , s.date, s_p.product_id, s_p.quantity
    FROM StoreManager.sales AS s 
    INNER JOIN StoreManager.sales_products AS s_p
    ON s.id = s_p.sale_id`,
  );

  return camelize(allSales);
};

module.exports = {
  insertSale,
  getSales,
};
