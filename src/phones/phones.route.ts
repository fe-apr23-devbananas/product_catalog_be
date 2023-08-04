import express from 'express';
import { getAllPhonesController } from './phones.controller';

const phonesRouter = express.Router();

phonesRouter.get('/', getAllPhonesController);
phonesRouter.get('/:phoneId', getAllPhonesController);
export { phonesRouter };
