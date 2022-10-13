const { expect } = require("chai");
const sinon = require("sinon");
const models = require("../../../src/models");
const {
  listAllProducts,
  listProductById,
  registerProduct,
} = require("../../../src/services/products.service");
const {
  allProductsMock,
  allProductsServiceMock,
  productByIdMock,
} = require("./mocks/product.service.mocks");

describe("Product services tests", function () {
  afterEach(sinon.restore);

  describe("listAllProducts unit tests", function () {
    it("Returns all products", async function () {
      sinon
        .stub(models.productsModel, "getAllProducts")
        .resolves(allProductsMock);
      const result = await listAllProducts();
      expect(result).to.be.a("object");
      expect(result).to.be.deep.equal(allProductsServiceMock);
    });
  });

  describe("listProductById unit tests", function () {
    it("Returns product by id success", async function () {
      sinon
        .stub(models.productsModel, "getProductById")
        .resolves(productByIdMock);
      const result = await listProductById(1);
      expect(result).to.be.a("object");
      expect(result).to.be.deep.equal({
        error: null,
        product: productByIdMock,
        status: 200,
      });
    });

    it("Returns product by id fail", async function () {
      sinon.stub(models.productsModel, "getProductById").resolves(null);
      const result = await listProductById(1);
      expect(result).to.be.deep.equal({
        error: true,
        product: "Product not found",
        status: 404,
      });
    });
  });

  describe("registerProduct unit tests", function () {
    it("Register product success", async function () {
      sinon
        .stub(models.productsModel, "insertProduct")
        .resolves({ id: 3, affectedRows: 1 });
      const result = await registerProduct({ name: "productX" });
      expect(result).to.be.a("object");
      expect(result).to.be.deep.equal({ id: 3, name: "productX" });
    });

    it("Register product fail", async function () {
      sinon
        .stub(models.productsModel, "insertProduct")
        .resolves({ id: 3, affectedRows: 0 });
      const result = await registerProduct({ name: "productX" });
      expect(result).to.be.deep.equal({ error: true, message: 'Product not registered', status: 400 });
    });

  });
});
