import express from 'express';
import cors from 'cors';
import { phonesRouter } from './phones/phones.route';
export var createServer = function () {
  var app = express();
  app.use(cors());
  app.use('/', express.json(), phonesRouter);
  // app.get('/', (request, response) => {
  //   const products = ['a', 'b', 'c', 'd'];
  //   response.status(200).send(products);
  // });
  return app;
};
