const express = require('express');
const { salesController } = require('../controllers');
const { validateSalesIds, validateSalesQuantities } = require('../middlewares/validateSalesInfos');

const router = express.Router();

router.post('/',
  validateSalesIds,
  validateSalesQuantities,
  salesController.registerSale);

router.get('/', salesController.listAllSales);

router.get('/:id', salesController.listSaleById);

module.exports = router;
