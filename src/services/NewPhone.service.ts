import { Phones } from '../models/Phones.model';

export class NewPhoneService {
  findById(itemId: string) {
    return Phones.findByPk(itemId);
  }
  findRecommended(namespaceId: string | undefined) {
    if (!namespaceId) {
      return [];
    }

    return Phones.findAll({
      where: {
        namespaceId: namespaceId,
      },
    });
  }
}
