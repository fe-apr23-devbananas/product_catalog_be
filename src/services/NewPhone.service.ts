import { Phones } from '../models/Phones.model';

export class NewPhoneService {
  findById(itemId: string) {
    return Phones.findByPk(itemId);
  }
}
