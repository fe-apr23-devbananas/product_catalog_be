import { Products } from '../models/Products.model';

// interface FindAllOptions {
//   limit?: number;
//   offset?: number;
//   sortBy?: 'itemId' | 'price' | 'name' | 'year';
// }

export class PhonesService {
  findById(id: string) {
    return Products.findOne({
      where: {
        itemId: id,
      },
    });
  }

  // findAll(options?: FindAllOptions, category = 'phones') {
  findAll(category = 'phones') {
    // const { limit, offset, sortBy = 'itemId' } = options;

    return Products.findAll({
      // limit,
      // offset,
      // order: [[sortBy, 'ASC']],
      where: {
        category: category,
      },
    });
  }
}
