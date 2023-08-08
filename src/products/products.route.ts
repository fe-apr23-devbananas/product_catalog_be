import express from 'express';
import {
  getAllProductsController,
  getNewestController,
  getProductByIdController,
  getRecommendedController,
} from './products.controller';

const productsRouter = express.Router();

productsRouter.get('/', getAllProductsController);
productsRouter.get('/:productId', getProductByIdController);
productsRouter.get('/:productId/recommended', getRecommendedController);
productsRouter.get('/new', getNewestController);

export { productsRouter };
