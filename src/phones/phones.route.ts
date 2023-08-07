import express from 'express';
import {
  getAllPhonesController,
  getPhoneByIdController,
} from './phones.controller';

const phonesRouter = express.Router();

phonesRouter.get('/', getAllPhonesController);
phonesRouter.get('/:phoneId', getPhoneByIdController);
export { phonesRouter };
