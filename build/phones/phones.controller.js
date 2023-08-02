import { phonesService } from './phones.service';
export var phonesController = {
  getAll: function getAll(_req, res) {
    var phones = phonesService.getAll();
    res.status(200).send(phones);
  },
  getBySlug: function getBySlug() {},
};
