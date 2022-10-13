const express = require('express');
const { salesController } = require('../controllers');
const { validateSalesInfos } = require('../middlewares/validateSalesInfos');

const router = express.Router();

router.post('/', validateSalesInfos, salesController.registerSale);

router.get('/', salesController.listAllSales);

router.get('/:id', salesController.listSaleById);

module.exports = router;
