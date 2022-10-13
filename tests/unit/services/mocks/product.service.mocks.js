const allProductsMock = [
  {
    id: 1,
    name: "Martelo de Thor",
  },
  {
    id: 2,
    name: "Traje de encolhimento",
  },
  {
    id: 3,
    name: "Escudo do Capitão América",
  },
];

const allProductsServiceMock = {
  error: null,
  products: allProductsMock,
  status: 200,
};

const productByIdMock = {
  id: 1,
  name: "Martelo de Thor",
};

const updatedProductQueryMock = { affectedRows: 1 }

module.exports = {
  allProductsMock,
  allProductsServiceMock,
  productByIdMock,
  updatedProductQueryMock,
};
