const { salesModel } = require('../models');

const registerSale = async (sale) => {
  const saleId = await salesModel.insertSale(sale);
  return saleId;
};

const listAllSales = async () => {
  const salesList = await salesModel.getSales();
  return salesList;
};

const listSaleById = async (id) => {
  console.log('service');
  const sale = await salesModel.getSaleById(id);
  return sale;
};

module.exports = {
  registerSale,
  listAllSales,
  listSaleById,
};
