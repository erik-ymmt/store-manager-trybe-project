const { expect } = require("chai");
const sinon = require("sinon");
const connection = require("../../../src/models/connection");
const { getAllProducts, getProductById } = require("../../../src/models/products.model");
const { allProductsMock, productByIdMock } = require("./mock/product.model.mocks");

describe.only('Product model tests', function () {
  afterEach(sinon.restore);

  describe('productModel unit tests', function () {
    it('Returns all products', async function () {
      sinon.stub(connection, 'execute').resolves([[allProductsMock]]);
      const result = await getAllProducts();
      expect(result).to.be.a('array');
      expect(result).to.be.deep.equal([allProductsMock]);
    })

    it('Returns a product by id', async function () {
      sinon.stub(connection, 'execute').resolves([[productByIdMock]]);
      const result = await getProductById(1);
      expect(result).to.be.a('object');
      expect(result).to.be.deep.equal(productByIdMock);
    })
  })
});
