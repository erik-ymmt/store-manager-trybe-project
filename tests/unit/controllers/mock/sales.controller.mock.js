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

const saleBodyReq = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const saleRegisteredMock = {
  id: 3,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ],
};

const deleteSaleResponseMock = {
  affectedRowsSalesProducts: 2,
  affectedRowsSales: 1,
  status: 204,
};

const updateSaleBodyMock = [
  {
    productId: 1,
    quantity: 10,
  },
  {
    productId: 2,
    quantity: 50,
  },
];

const updatedSaleMock = {
  saleId: 1,
  itemsUpdated: updateSaleBodyMock,
};

module.exports = {
  allSalesMockCamelized,
  saleMockCamelized,
  saleBodyReq,
  saleRegisteredMock,
  deleteSaleResponseMock,
  updatedSaleMock,
  updateSaleBodyMock,
};
