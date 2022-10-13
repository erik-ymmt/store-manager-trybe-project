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

const productByIdMock = {
  id: 1,
  name: "Martelo de Thor",
};

const productRegistredMock = { insertId: 3, affectedRows: 1 };

module.exports = {
  allProductsMock,
  productByIdMock,
  productRegistredMock,
};
