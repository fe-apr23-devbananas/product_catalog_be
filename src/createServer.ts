import express from 'express';
// import cors from 'cors';
import path from 'path';
import { phonesRouter } from './phones/phones.route';
import { initDB } from './initDB';
import dotenv from 'dotenv';
import { productsRouter } from './products/products.route';

export const createServer = async () => {
  dotenv.config();

  // const CLIENT_URL = process.env.CLIENT_URL;
  const PORT = process.env.DB_PORT;

  const app = express();

  initDB();

  // app.use(
  //   cors({
  //     origin: [CLIENT_URL as string, 'http://localhost:3000'],
  //   }),
  // );

  app.use('/img', express.static(path.join('img')));
  app.use('/phones', express.json(), phonesRouter);
  app.use('/products', express.json(), productsRouter);

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
};
