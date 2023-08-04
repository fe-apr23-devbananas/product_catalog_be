import { Products } from '../models/Products.model';

interface FindALlOptions {
  limit?: number;
  offset?: number;
  sortBy?: 'itemId' | 'price' | 'name' | 'year';
}

export class PhonesService {
  findById(id: string) {
    return Products.findAll({
      where: {
        itemId: id,
      },
    });
  }

  findAll(options: FindALlOptions, category = 'phones') {
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
}
