import { Controller } from '../types';
import { PhonesService } from './phones.service';

export const getAllPhonesController: Controller = async (req, res) => {
  const phonesService = new PhonesService();

  const phones = await phonesService.findAll();

  res.send(phones);
};
