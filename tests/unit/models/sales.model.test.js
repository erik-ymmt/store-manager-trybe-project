const { expect } = require("chai");
const sinon = require("sinon");
const connection = require("../../../src/models/connection");
const {
  getSales,
  getSaleById,
  insertSale,
  deleteSale,
} = require("../../../src/models/sales.model");
const {
  allSalesMock,
  allSalesMockCamelized,
  saleMock,
  saleMockCamelized,
  saleReqMock,
} = require("./mock/sales.model.mock");

describe("Sales model tests", function () {
  afterEach(sinon.restore);
  describe("getSales unit test", function () {
    it("list all sales", async function () {
      sinon.stub(connection, "execute").resolves([allSalesMock]);
      const result = await getSales();
      expect(result).to.be.deep.equal(allSalesMockCamelized);
    });
  });

  describe("getSalesById unit test", function () {
    it("list sale by id", async function () {
      sinon.stub(connection, "execute").resolves([saleMock]);
      const result = await getSaleById(1);
      expect(result).to.be.deep.equal(saleMockCamelized);
    });
  });

  describe("insertSale unit test", function () {
    it("insert sale with one product", async function () {
      sinon
        .stub(connection, "execute")
        .onFirstCall()
        .resolves([{ insertId: 2 }])
        .onSecondCall()
        .resolves();
      const result = await insertSale(saleReqMock);
      expect(result).to.equal(2);
    });
  });

  describe("deleteSale unit test", function () {
    it("delete sale", async function () {
      sinon
        .stub(connection, "execute")
        .onFirstCall()
        .resolves([{ affectedRows: 2 }])
        .onSecondCall()
        .resolves([{ affectedRows: 1 }]);

      const result = await deleteSale(3);

      expect(result).to.deep.equal({
        affectedRowsSalesProducts: 2,
        affectedRowsSales: 1,
      });
    });
  });
});
