import express from 'express';
import { getAllPhonesController } from './phones.controller';

const phonesRouter = express.Router();

phonesRouter.get('/', getAllPhonesController);

export { phonesRouter };
