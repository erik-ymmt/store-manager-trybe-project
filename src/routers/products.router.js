const express = require('express');
const { productsController } = require('../controllers');
const { validateProductsInfo } = require('../middlewares/validateProductsInfo');

const router = express.Router();

router.get('/', productsController.listProducts);

router.get('/:id', productsController.listProductById);

router.post('/', validateProductsInfo, productsController.registerProduct);

module.exports = router;