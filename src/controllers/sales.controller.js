const { salesService } = require('../services');

const registerSale = async (req, res) => {
  const sale = req.body;
  const id = await salesService.registerSale(sale);
  res.status(201).json({ id, itemsSold: sale });
};

const listAllSales = async (_req, res) => {
  const salesList = await salesService.listAllSales();
  res.status(200).json(salesList);
};

module.exports = {
  registerSale,
  listAllSales,
};