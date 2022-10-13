const { salesModel } = require('../models');

const registerSaleService = async (sale) => {
  const saleId = await salesModel.insertSale(sale);
  return saleId;
};

const listAllSales = async () => {
  const salesList = await salesModel.getSales();
  return salesList;
};

const listSaleById = async (id) => {
  const sale = await salesModel.getSaleById(id);
  return sale;
};

module.exports = {
  registerSaleService,
  listAllSales,
  listSaleById,
};
