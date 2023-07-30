import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (request, response) => {
  const products = ['a', 'b', 'c'];

  response.status(200).send(products);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
