const express = require('express');
const { salesController } = require('../controllers');
const {
  validateSalesQuantities,
  validateSalesProductIds,
  validateSaleId,
} = require('../middlewares/validateSalesInfos');

const router = express.Router();

router.post(
  '/',
  validateSalesProductIds,
  validateSalesQuantities,
  salesController.registerSale,
);

router.get('/', salesController.listAllSales);

router.get('/:id', salesController.listSaleById);

router.delete('/:id', validateSaleId, salesController.deleteSale);

router.put(
  '/:id',
  validateSalesProductIds,
  validateSalesQuantities,
  validateSaleId,
  salesController.updateSale,
);

module.exports = router;
