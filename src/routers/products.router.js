const express = require('express');
const { productsController } = require('../controllers');
const { validateProductsInfo, validadeDeleteId } = require('../middlewares/validateProductsInfo');
const { validateUpdateProductInfo } = require('../middlewares/validateUpdateProductInfo');

const router = express.Router();

router.get('/search', productsController.searchProduct);

router.get('/', productsController.listProducts);

router.get('/:id', productsController.listProductById);

router.post('/', validateProductsInfo, productsController.registerProduct);

router.put('/:id', validateUpdateProductInfo, productsController.updateProduct);

router.delete('/:id', validadeDeleteId, productsController.deleteProduct);

module.exports = router;