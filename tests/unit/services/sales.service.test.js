const { expect } = require("chai");
const sinon = require("sinon");
const models = require("../../../src/models");
const { listAllSales, listSaleById, registerSaleService } = require("../../../src/services/sales.service");
const { allSalesMockCamelized, saleMockCamelized, saleReqMock } = require("./mocks/sales.service.mocks");

describe("Sales services tests", function () {
  afterEach(sinon.restore);

    describe("registerSaleService unit tests", function () {
    it("Register sale of one product", async function () {
      sinon
        .stub(models.salesModel, "insertSale")
        .resolves(1);
      const result = await registerSaleService(saleReqMock);
      expect(result).to.equal(1);
    });
  });

  describe("listAllSales unit tests", function () {
    it("Returns all sales", async function () {
      sinon
        .stub(models.salesModel, "getSales")
        .resolves(allSalesMockCamelized);
      const result = await listAllSales();
      expect(result).to.be.a("array");
      expect(result).to.be.deep.equal(allSalesMockCamelized);
    });
  });

  describe("listSaleById unit tests", function () {
    it("Return sale by id", async function () {
      sinon
        .stub(models.salesModel, "getSaleById")
        .resolves(saleMockCamelized);
      const result = await listSaleById(1);
      expect(result).to.be.a("array");
      expect(result).to.be.deep.equal(saleMockCamelized);
    });
  });

});
