import express from 'express';
import {
  getAllProductsController,
  getProductByIdController,
} from './products.controller';

const productsRouter = express.Router();

productsRouter.get('/', getAllProductsController);
productsRouter.get('/:productId', getProductByIdController);
productsRouter.get('/:new', getProductByIdController);

export { productsRouter };
