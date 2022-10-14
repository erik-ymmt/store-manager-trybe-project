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

const deleteSale = async (req, res) => {
  const id = Number(req.params.id);
  const result = await salesService.deleteSale(id);
  res.status(result.status).end();
};

const updateSale = async (req, res) => {
  const id = Number(req.params.id);
  const items = req.body;
  const sale = {
    saleId: id,
    itemsUpdated: items,
  };
  await salesService.updateSale(sale);
  res.status(200).json(sale);
  // res.status(404).json({ message: 'Sale not found' });
};

module.exports = {
  registerSale,
  listAllSales,
  listSaleById,
  deleteSale,
  updateSale,
};