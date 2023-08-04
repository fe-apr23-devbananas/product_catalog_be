import { Controller } from '../types';
import { PhonesService } from './phones.service';

const sortByValues = ['itemId', 'price', 'name', 'year'];

export const getAllPhonesController: Controller = async (req, res) => {
  const phonesService = new PhonesService();

  const { limit = 8, offset = 0, sortBy = 'itemId' } = req.query;

  const isSortByValid =
    typeof sortBy === 'string' && !sortByValues.includes(sortBy as string);
  const isLimitValid = !Number.isNaN(limit);
  const isOffsetValid = !Number.isNaN(offset);

  if (!isSortByValid || !isLimitValid || !isOffsetValid) {
    res.sendStatus(400);
  }

  const phones = await phonesService.findAll({
    limit: Number(limit),
    offset: Number(offset),
    sortBy: sortBy as 'itemId' | 'price' | 'name' | 'year',
  });

  res.send(phones);
};

export const getPhoneByIdController: Controller = async (req, res) => {
  const phonesService = new PhonesService();
  const { phoneId } = req.params;
  const phones = await phonesService.findById(phoneId);

  res.send(phones);
};
