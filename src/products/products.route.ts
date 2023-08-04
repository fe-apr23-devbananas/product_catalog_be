import express from 'express';
import { getProductsByIdsController } from './products.controller';

const productsRouter = express.Router();

productsRouter.get('/', getProductsByIdsController);

export { productsRouter };
