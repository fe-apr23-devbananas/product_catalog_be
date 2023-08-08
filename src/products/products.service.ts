import { Products } from '../models/Products.model';

interface FindAllOptions {
  limit?: number;
  offset?: number;
  sortBy?: 'itemId' | 'price' | 'name' | 'year';
}

export class ProductsService {
  findById(itemId: string) {
    return Products.findByPk(itemId);
  }

  findAll(category = 'phones') {
    return Products.findAll({
      where: {
        category: category,
      },
    });
  }

  findAllWithPagination(options: FindAllOptions, category = 'phones') {
    const { limit, offset, sortBy = 'itemId' } = options;

    return Products.findAll({
      limit,
      offset,
      order: [[sortBy, 'ASC']],
      where: {
        category: category,
      },
    });
  }

  findNewest() {
    return Products.findAll({
      limit: 10,
      order: [['name', 'DESC']],
    });
  }
}
