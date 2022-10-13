const sinon = require("sinon");
const services = require("../../../src/services");
const sinonChai = require("sinon-chai");
const chai = require("chai");
const { productsController } = require("../../../src/controllers");
const {
  allProductsFromService,
  allProductsList,
  productMock,
  responseProductMock,
  responseProductMockError,
  responseRegisteError,
} = require("./mock/product.controller.mocks");

const { expect } = require("chai");
chai.use(sinonChai);

describe("Product controller tests", function () {
  afterEach(sinon.restore);

  describe("listProducts unit tests", function () {
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

  describe("listProductById unit tests", function () {
    it("Lists product by id success", async function () {
      const req = { params: { id: 1 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(services.productService, "listProductById")
        .resolves(responseProductMock);
      await productsController.listProductById(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productMock);
    });

    it("Lists product by id fail", async function () {
      const req = { params: { id: 1 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(services.productService, "listProductById")
        .resolves(responseProductMockError);
      await productsController.listProductById(req, res);
      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({
        message: "Product not found",
      });
    });
  });

  describe("registerProduct unit tests", function () {
    it("registe one product success", async function () {
      const req = {
        body: {
          name: "productX",
        },
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(services.productService, "registerProduct")
        .resolves({ id: 3, name: "productX" });
      await productsController.registerProduct(req, res);
      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith({ id: 3, name: "productX" });
    });

  it("registe one product fail", async function () {
    const req = {
      body: {
        name: "productX",
      },
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(services.productService, "registerProduct")
      .resolves(responseRegisteError);
    await productsController.registerProduct(req, res);
    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: "Product not registered" });
  });
  });
});
