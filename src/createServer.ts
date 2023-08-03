import express from 'express';
import cors from 'cors';
import { phonesRouter } from './phones/phones.route';
import { initDB } from './initDB';
import dotenv from 'dotenv';

export const createServer = async () => {
  dotenv.config();

  const CLIENT_URL = process.env.CLIENT_URL;
  const PORT = process.env.PORT;

  const app = express();

  initDB();

  app.use(
    cors({
      origin: CLIENT_URL,
    }),
  );

  app.use('/', express.json(), phonesRouter);

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
};
