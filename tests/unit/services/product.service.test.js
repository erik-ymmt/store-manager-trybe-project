const { expect } = require("chai");
const sinon = require("sinon");
const models = require("../../../src/models");
const {
  listAllProducts,
  listProductById,
  registerProduct,
  updateProduct,
  deleteProduct,
} = require("../../../src/services/products.service");
const {
  allProductsMock,
  allProductsServiceMock,
  productByIdMock,
  updatedProductQueryMock,
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

  describe("updateProduct unit tests", function () {
    it("Update product success", async function () {
      sinon
        .stub(models.productsModel, "updateProduct")
        .resolves(updatedProductQueryMock);
      const result = await updateProduct({ id: 1, name: "Martelo do Batman" });
      expect(result).to.be.a("object");
      expect(result).to.be.deep.equal(updatedProductQueryMock);
    });

    it("Update product fail", async function () {
      sinon
        .stub(models.productsModel, "updateProduct")
        .resolves({ affectedRows: 0 });
      const result = await updateProduct({ id: 1, name: "Martelo do Batman" });
      expect(result).to.be.deep.equal({ error: true, message: 'Something went wrong', status: 400 });
    });
  });

  describe("deleteProduct unit tests", function () {
    it("Delete product success", async function () {
      sinon
        .stub(models.productsModel, "deleteProduct")
        .resolves({ affectedRows: 1 });
      const result = await deleteProduct(1);
      expect(result).to.be.a("object");
      expect(result).to.be.deep.equal({ affectedRows: 1 });
    });

    it("Delete product fail", async function () {
      sinon
        .stub(models.productsModel, "deleteProduct")
        .resolves({ affectedRows: 0 });
      const result = await deleteProduct(1);
      expect(result).to.be.deep.equal({ error: true, message: 'Something went wrong', status: 400 });
    });
  });

});
