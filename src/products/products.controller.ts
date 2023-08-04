import { Controller } from '../types';
import { ProductsService } from './products.service';

export const getProductsByIdsController: Controller = async (req, res) => {
  const productsService = new ProductsService();

  const phones = await productsService.findAll();

  res.send(phones);
};
