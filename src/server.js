const app = require('./app');
require('dotenv').config();
// const connection = require('./models/connection');

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.listen(process.env.PORT, async () => {
  console.log(`Escutando na porta ${process.env.PORT}`);

  // const [result] = await connection.execute('SELECT 1');
  // if (result) {
  //   console.log('MySQL connection OK');
  // }
});
