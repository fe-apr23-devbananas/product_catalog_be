import express from 'express';
import { getAllPhonesController } from './phones.controller';

const phonesRouter = express.Router();

phonesRouter.get('/phones', getAllPhonesController);

export { phonesRouter };
