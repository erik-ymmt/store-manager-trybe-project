const sinon = require("sinon");
const { productsController } = require("../../../src/controllers");
const services = require("../../../src/services");
const sinonChai = require('sinon-chai');
const chai = require('chai');

const { expect } = require("chai");
chai.use(sinonChai);

const {
  allProductsFromService,
  allProductsList,
} = require("./mock/product.controller.mocks");

describe("Product controller tests", function () {
  afterEach(sinon.restore);
  describe("productController unit tests", function () {
    it("Lists all products", async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(services.productService, "listAllProducts")
        .resolves(allProductsFromService);
      await productsController.listProducts(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(allProductsList);
    });
  });
});
