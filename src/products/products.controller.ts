import { NewPhoneService } from '../services/NewPhone.service';
import { Controller } from '../types';
import { ProductsService } from './products.service';

const sortByValues = ['itemId', 'price', 'name', 'year'];
const categories = ['phones', 'tablets', 'accessories'];

export const getAllProductsController: Controller = async (req, res) => {
  const productsService = new ProductsService();

  const { category, limit = 8, offset = 0, sortBy = 'itemId' } = req.query;

  if (category === 'all' || !category) {
    const products = await productsService.findAll(category);

    res.send(products);
  }

  const isSortByValid =
    typeof sortBy === 'string' && !sortByValues.includes(sortBy as string);
  const isLimitValid = !Number.isNaN(limit);
  const isOffsetValid = !Number.isNaN(offset);

  if (!isSortByValid || !isLimitValid || !isOffsetValid) {
    res.sendStatus(400);
  }

  const products = await productsService.findAllWithPagination(
    {
      limit: Number(limit),
      offset: Number(offset),
      sortBy: sortBy as 'itemId' | 'price' | 'name' | 'year',
    },
    category as string,
  );

  res.send(products);
};

export const getProductByIdController: Controller = async (req, res) => {
  const productsService = new ProductsService();
  const phoneService = new NewPhoneService();

  const { category } = req.query;
  const { productId } = req.params;

  const isCategoryValid = categories.includes(category as string);

  if (!isCategoryValid) {
    res.send([]);
  }

  let product;

  switch (category) {
    case 'phones':
      product = await phoneService.findById(productId);
      break;
    case 'all':
    default:
      product = await productsService.findById(productId);
      break;
  }

  if (!product) {
    res.sendStatus(404);
  }

  res.send(product);
};

export const getNewestController: Controller = async (_req, res) => {
  const productsService = new ProductsService();

  const newest = await productsService.findNewest();

  if (!newest) {
    res.sendStatus(500);
  }

  res.send(newest);
};
