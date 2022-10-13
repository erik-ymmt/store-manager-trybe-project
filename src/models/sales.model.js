const camelize = require('camelize');
const connection = require('./connection');

const insertSalesProduct = async (element, saleId) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, element.productId, element.quantity],
  );
};

const insertSale = async (sales) => {
  console.log('sale from model before', sales); //

  const [result] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW())',
  );

  console.log('sale from model after', sales); //
  const saleId = result.insertId;

  sales.forEach(async (element) => {
    console.log('>>>>> saleId', saleId); //
    console.log('element', element); //
    console.log('element.productId', element.productId); //
    console.log('element.quantity', element.quantity); //
    await insertSalesProduct(element, saleId);
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

const getSaleById = async (id) => {
  const [sale] = await connection.execute(
    `SELECT s.date, s_p.product_id, s_p.quantity
    FROM StoreManager.sales AS s 
    INNER JOIN StoreManager.sales_products AS s_p
    ON s.id = s_p.sale_id
    WHERE s.id = ?`,
    [id],
  );

  return camelize(sale);
};

module.exports = {
  insertSale,
  getSales,
  getSaleById,
};
