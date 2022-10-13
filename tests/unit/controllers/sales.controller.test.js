const sinon = require("sinon");
const chai = require("chai");
const sinonChai = require("sinon-chai");

const { salesController } = require("../../../src/controllers");
const {
  allSalesMockCamelized,
  saleMockCamelized,
  saleRegisteredMock,
  saleBodyReq,
} = require("./mock/sales.controller.mock");
const services = require("../../../src/services");

const { expect } = require("chai");
chai.use(sinonChai);

describe("Sales controller tests", function () {
  afterEach(sinon.restore);

  describe("listAllSales unit tests", function () {
    it("Lists all sales", async function () {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(services.salesService, "listAllSales")
        .resolves(allSalesMockCamelized);
      await salesController.listAllSales(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(allSalesMockCamelized);
    });
  });

  describe("listSaleById unit tests", function () {
    it("Lists sale by id success", async function () {
      const req = { params: { id: 1 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(services.salesService, "listSaleById")
        .resolves(saleMockCamelized);
      await salesController.listSaleById(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(saleMockCamelized);
    });

    it("Lists sale by id fail", async function () {
      const req = { params: { id: 1 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(services.salesService, "listSaleById").resolves([]);
      await salesController.listSaleById(req, res);
      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: "Sale not found" });
    });
  });

  describe("registerSale unit tests", function () {
    it("register sales success", async function () {
      const req = { body: saleBodyReq };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(services.salesService, "registerSaleService").resolves(3);
      await salesController.registerSale(req, res);
      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(saleRegisteredMock);
    });

    it("register sales fail", async function () {
      const req = { body: saleBodyReq };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(services.salesService, "registerSaleService").resolves(null);
      await salesController.registerSale(req, res);
      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: 'error' });
    });
  });
});
