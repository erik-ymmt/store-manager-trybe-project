const camelize = require('camelize');
const connection = require('./connection');

const insertSalesProduct = async (element, saleId) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, element.productId, element.quantity],
  );
};

const insertSale = async (sales) => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW())',
  );

  const saleId = result.insertId;

  const salesQueries = sales.map(async (element) => {
    await insertSalesProduct(element, saleId);
  });

  await Promise.all(salesQueries);

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

const deleteSale = async (id) => {
  const [resultSalesProducts] = await connection.execute(
    'DELETE FROM StoreManager.sales_products WHERE sale_id = ?',
    [id],
  );

  const [resultSales] = await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = ?',
    [id],
  );

  return {
    affectedRowsSalesProducts: resultSalesProducts.affectedRows,
    affectedRowsSales: resultSales.affectedRows,
  };
};

const updateSale = async (sale) => {
  const { saleId } = sale;
  const items = sale.itemsUpdated;

  const updateItems = items.map(async (item) => {
    await connection.execute(
      `UPDATE StoreManager.sales_products
        SET quantity=?
        WHERE sale_id=?
        AND product_id=?`,
      [item.quantity, saleId, item.productId],
    );
  });

  await Promise.all(updateItems);

  return { message: 'success' };
};

module.exports = {
  insertSale,
  getSales,
  getSaleById,
  deleteSale,
  updateSale,
};
