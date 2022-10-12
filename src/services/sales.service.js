const { salesModel } = require('../models');

const registerSale = async (sale) => {
  const saleId = await salesModel.insertSale(sale);
  return saleId;
};

const listAllSales = async () => {
  const salesList = await salesModel.getSales();
  return salesList;
};

module.exports = {
  registerSale,
  listAllSales,
};
