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

const deleteSale = async (id) => {
  const result = await salesModel.deleteSale(id);
  return { ...result, status: 204 };
};

module.exports = {
  registerSaleService,
  listAllSales,
  listSaleById,
  deleteSale,
};
