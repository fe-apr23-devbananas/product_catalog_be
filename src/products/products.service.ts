import { Products } from '../models/Products.model';

export class ProductsService {
  findById(id: string) {
    return Products.findByPk(id);
  }

  findAll(category = 'phones') {
    return Products.findAll({
      where: {
        category: category,
      },
    });
  }
}
