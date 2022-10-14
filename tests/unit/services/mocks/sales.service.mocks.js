const allSalesMockCamelized = [
  {
    saleId: 1,
    date: "2021-09-09T04:54:29.000Z",
    productId: 1,
    quantity: 2,
  },
  {
    saleId: 1,
    date: "2021-09-09T04:54:54.000Z",
    productId: 2,
    quantity: 2,
  },
];

const saleMockCamelized = [
  {
    saleId: 1,
    date: "2021-09-09T04:54:29.000Z",
    productId: 1,
    quantity: 2,
  },
];

const saleReqMock = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const deleteSalesResultMock = {
  affectedRowsSalesProducts: 2,
  affectedRowsSales: 1,
};

module.exports = {
  allSalesMockCamelized,
  saleMockCamelized,
  saleReqMock,
  deleteSalesResultMock,
};
