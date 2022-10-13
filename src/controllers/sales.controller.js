const { salesService } = require('../services');

const registerSale = async (req, res) => {
  const sale = req.body;
  const id = await salesService.registerSaleService(sale);
  
  if (!id) return res.status(404).json({ message: 'error' });
  return res.status(201).json({ id, itemsSold: sale });
};

const listAllSales = async (_req, res) => {
  const salesList = await salesService.listAllSales();
  return res.status(200).json(salesList);
};

const listSaleById = async (req, res) => {
  const { id } = req.params;
  const saleList = await salesService.listSaleById(id);
  if (!saleList.length) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(200).json(saleList);
};

module.exports = {
  registerSale,
  listAllSales,
  listSaleById,
};