const allProductsList = [
  { id: 1, name: "Martelo de Thor" },
  { id: 2, name: "Traje de encolhimento" },
  { id: 3, name: "Escudo do Capitão América" },
  { id: 4, name: '{"name":"Produto1"}' },
  { id: 5, name: '{"name":"ProdutoX"}' },
];

const allProductsFromService = {
  error: null,
  status: 200,
  products: allProductsList,
};

const productMock = { id: 1, name: "Martelo de Thor" };

const responseProductMock = { error: null, product: productMock, status: 200 };

const responseProductMockError = {
  error: true,
  product: "Product not found",
  status: 404,
};

const responseRegisteError = {
  error: true,
  message: "Product not registered",
  status: 400,
};

const updatedProductMock = {
  id: 1,
  name: "Martelo do Batman",
};

module.exports = {
  allProductsList,
  allProductsFromService,
  productMock,
  responseProductMock,
  responseProductMockError,
  responseRegisteError,
  updatedProductMock,
};
