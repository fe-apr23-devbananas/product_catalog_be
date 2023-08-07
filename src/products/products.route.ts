import express from 'express';
import {
  getAllProductsController,
  getNewestController,
  getProductByIdController,
} from './products.controller';

const productsRouter = express.Router();

productsRouter.get('/', getAllProductsController);
productsRouter.get('/:productId', getProductByIdController);
productsRouter.get('/new', getNewestController);

export { productsRouter };
