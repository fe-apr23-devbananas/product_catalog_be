import { Controller } from '../types';
import { tabletsService } from '../services/Tablets.service';
import { productsService } from '../services/Products.service';

// const sortByValues = ['itemId', 'price', 'name', 'year'];

export const getAllTabletsController: Controller = async (req, res) => {
  const { limit = 8, offset = 0, sortBy = 'itemId' } = req.query;

  // const isSortByValid =
  //   typeof sortBy === 'string' && !sortByValues.includes(sortBy as string);
  // const isLimitValid = !Number.isNaN(limit);
  // const isOffsetValid = !Number.isNaN(offset);

  // if (!isSortByValid || !isLimitValid || !isOffsetValid) {
  //   res.sendStatus(400);
  // }

  const tablets = await tabletsService.findAll({
    limit: Number(limit),
    offset: Number(offset),
    sortBy: sortBy as 'itemId' | 'price' | 'name' | 'year',
  });

  res.status(200).send(tablets);
};

export const getTabletByIdController: Controller = async (req, res) => {
  const { tabletId } = req.params;
  const tablets = await tabletsService.findById(tabletId);

  res.status(200).send(tablets);
};

export const getRecommendedController: Controller = async (req, res) => {
  const { tabletId } = req.params;

  const tablet = await tabletsService.findById(tabletId);

  if (!tablet) {
    res.sendStatus(404);
  }

  const namespaceId = tablet?.dataValues.namespaceId || '';

  const recommendedTablets = await tabletsService.findRecommended(namespaceId);

  const recommendedTabletsIds = recommendedTablets.map(
    (tablet) => tablet.dataValues.id,
  );

  const recommended = await productsService.findRecomended(
    recommendedTabletsIds,
  );

  if (!recommended) {
    res.sendStatus(404);
  }

  res.status(200).send(recommended);
};
