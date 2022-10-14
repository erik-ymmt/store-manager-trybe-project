const { expect } = require("chai");
const sinon = require("sinon");
const connection = require("../../../src/models/connection");
const {
  getAllProducts,
  getProductById,
  insertProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
} = require("../../../src/models/products.model");
const {
  allProductsMock,
  productByIdMock,
  productRegistredMock,
  updatedProductQueryMock,
} = require("./mock/product.model.mocks");

describe("Product model tests", function () {
  afterEach(sinon.restore);

  describe("getAllProducts unit tests", function () {
    it("Returns all products", async function () {
      sinon.stub(connection, "execute").resolves([[allProductsMock]]);
      const result = await getAllProducts();
      expect(result).to.be.a("array");
      expect(result).to.be.deep.equal([allProductsMock]);
    });
  });

  describe("getProductById unit tests", function () {
    it("Returns a product by id", async function () {
      sinon.stub(connection, "execute").resolves([[productByIdMock]]);
      const result = await getProductById(1);
      expect(result).to.be.a("object");
      expect(result).to.be.deep.equal(productByIdMock);
    });
  });

  describe("insertProduct unit tests", function () {
    it("insert a product", async function () {
      sinon.stub(connection, "execute").resolves([productRegistredMock]);
      const result = await insertProduct("productX");

      expect(result).to.be.a("object");
      expect(result).to.be.deep.equal({ id: 3, affectedRows: 1 });
    });
  });

  describe("updateProduct unit tests", function () {
    it("Update product success", async function () {
      sinon.stub(connection, "execute").resolves([updatedProductQueryMock]);
      const result = await updateProduct({ id: 1, name: "Martelo do Batman" });
      expect(result).to.be.a("object");
      expect(result).to.be.deep.equal(updatedProductQueryMock);
    });
  });

  describe("deleteProduct unit tests", function () {
    it("Delete product success", async function () {
      sinon.stub(connection, "execute").resolves([{ affectedRows: 1 }]);
      const result = await deleteProduct(1);
      expect(result).to.be.a("object");
      expect(result).to.be.deep.equal({ affectedRows: 1 });
    });
  });

  describe("searchProduct unit tests", function () {
    it("Search product success", async function () {
      sinon.stub(connection, "execute").resolves([[{
          id: 3,
          name: "Escudo do Capitão América",
        }]]);
      const result = await searchProduct(1);
      expect(result).to.be.a("array");
      expect(result).to.be.deep.equal([{
          id: 3,
          name: "Escudo do Capitão América",
        }]);
    });
  });
});
