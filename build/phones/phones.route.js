import express from 'express';
import { phonesController } from './phones.controller';
var phonesRouter = express.Router();
phonesRouter.get('/', phonesController.getAll);
phonesRouter.get('/:phoneSlug', phonesController.getBySlug);
export { phonesRouter };
