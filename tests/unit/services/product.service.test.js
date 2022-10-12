const { expect } = require("chai");
const sinon = require("sinon");
const models = require("../../../src/models");
const {
  listAllProducts,
  listProductById,
} = require("../../../src/services/products.service");
const {
  allProductsMock,
  allProductsServiceMock,
  productByIdMock,
} = require("./mocks/product.service.mocks");

describe.only("Product services tests", function () {
  afterEach(sinon.restore);

  describe("productModel services tests", function () {
    it("Returns all products", async function () {
      sinon
        .stub(models.productsModel, "getAllProducts")
        .resolves(allProductsMock);
      const result = await listAllProducts();
      expect(result).to.be.a("object");
      expect(result).to.be.deep.equal(allProductsServiceMock);
    });

    it("Returns product by id", async function () {
      sinon
        .stub(models.productsModel, "getProductById")
        .resolves(productByIdMock);
      const result = await listProductById(1);
      expect(result).to.be.a("object");
      expect(result).to.be.deep.equal({ error: null, product: productByIdMock, status: 200 });
    });
  });
});
