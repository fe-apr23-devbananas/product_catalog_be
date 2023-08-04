import { Products } from '../models/Products.model';

export class PhonesService {
  findById(id: number) {
    return Products.findByPk(id);
  }

  findAll(category = 'phones') {
    return Products.findByPk(category);
  }
}
