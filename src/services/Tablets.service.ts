import { Tablets } from '../models/Tablets.model';

export class TabletsService {
  findById(itemId: string) {
    return Tablets.findByPk(itemId);
  }
  findRecommended(namespaceId: string | undefined) {
    if (!namespaceId) {
      return [];
    }

    return Tablets.findAll({
      where: {
        namespaceId: namespaceId,
      },
    });
  }
}
