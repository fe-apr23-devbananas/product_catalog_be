import { Phones } from '../models/Phones.model';
import { NewPhoneService } from '../services/NewPhone.service';
import { TabletsService } from '../services/Tablets.service';
import { Controller } from '../types';
import { ProductsService } from './products.service';

// const sortByValues = ['itemId', 'price', 'name', 'year'];
const categories = ['phones', 'tablets', 'accessories'];

export const getAllProductsController: Controller = async (req, res) => {
  const productsService = new ProductsService();

  const {
    category = 'phones',
    limit = 8,
    offset = 0,
    sortBy = 'itemId',
  } = req.query;

  // const isSortByValid =
  //   typeof sortBy === 'string' && !sortByValues.includes(sortBy as string);
  // const isLimitValid = !Number.isNaN(limit);
  // const isOffsetValid = !Number.isNaN(offset);

  // if (!isSortByValid || !isLimitValid || !isOffsetValid) {
  //   res.sendStatus(400);
  // }

  const products = await productsService.findAllWithPagination(
    {
      limit: Number(limit),
      offset: Number(offset),
      sortBy: sortBy as 'itemId' | 'price' | 'name' | 'year',
    },
    category as string,
  );

  if (!products) {
    res.sendStatus(400);
  }

  res.status(200).send(products);
};

export const getProductByIdController: Controller = async (req, res) => {
  const productsService = new ProductsService();
  const phonesService = new NewPhoneService();
  const tabletsService = new TabletsService();

  const { category } = req.query;
  const { productId } = req.params;

  const isCategoryValid = categories.includes(category as string);

  if (!isCategoryValid) {
    res.status(200).send([]);
  }

  let product;

  switch (category) {
    case 'phones':
      product = await phonesService.findById(productId);
      break;
    case 'tablets':
      product = await tabletsService.findById(productId);
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

  res.status(200).send([1, 2, 3]);
};

export const getRecommendedController: Controller = async (req, res) => {
  const productsService = new ProductsService();
  const phonesService = new NewPhoneService();
  const tabletsService = new TabletsService();

  const { category } = req.query;
  const { productId } = req.params;

  let product;
  let recommendedProducts: Phones[];

  switch (category) {
    case 'phones':
      product = await phonesService.findById(productId);
      recommendedProducts = await phonesService.findRecommended(
        product?.namespaceId,
      );
      break;
    case 'tablets':
      product = await tabletsService.findById(productId);
      recommendedProducts = await tabletsService.findRecommended(
        product?.namespaceId,
      );
      break;
    default:
      recommendedProducts = [];
      break;
  }

  const products = await productsService.findAll();

  const recommendedIds = recommendedProducts.map((item) => item.id);

  const recommended = products.filter((product) =>
    recommendedIds.includes(product.itemId),
  );

  res.status(200).send(recommended);
};
