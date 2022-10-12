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

module.exports = {
  allProductsList,
  allProductsFromService,
};
