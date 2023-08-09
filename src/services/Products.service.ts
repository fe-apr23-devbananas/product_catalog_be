import { literal } from 'sequelize';
import { Products } from '../models/Products.model';

interface FindAllOptions {
  limit?: number;
  offset?: number;
  sortBy?: 'itemId' | 'price' | 'name' | 'year';
}

class ProductsService {
  findById(itemId: string) {
    return Products.findByPk(itemId);
  }

  findAll(options: FindAllOptions, category = 'phones') {
    const { limit, offset, sortBy = 'itemId' } = options;

    return Products.findAndCountAll({
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
      order: [['year', 'DESC']],
    });
  }

  findRecomended(id: string[]) {
    return Products.findAll({
      where: {
        itemId: id,
      },
    });
  }

  findDiscounts() {
    return Products.findAll({
      limit: 10,
      order: [[literal('ABS("fullPrice" - "price")'), 'DESC']],
    });
  }
}

export const productsService = new ProductsService();
