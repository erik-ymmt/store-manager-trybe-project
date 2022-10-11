const express = require('express');
const productController = require('../controllers');

const router = express.Router();

router.get('/', productController.listProducts);

module.exports = {};