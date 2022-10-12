const express = require('express');
const { salesController } = require('../controllers');

const router = express.Router();

router.post('/', salesController.registerSale);

router.get('/', salesController.listAllSales);

module.exports = router;