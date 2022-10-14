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

const updateSale = async (sale) => {
  console.log('controller update');
  await salesModel.updateSale(sale);
  return { error: null, status: 200 };
};

module.exports = {
  registerSaleService,
  listAllSales,
  listSaleById,
  deleteSale,
  updateSale,
};
