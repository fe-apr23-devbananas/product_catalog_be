import fs from 'fs';
var phones = fs.readFileSync('../phones.json');
// const phones = [{ phone: 'iphone3' }, { phone: 'iphone4' }, { phone: 'iphone5' }];
export var phonesService = {
  getAll: function getAll() {
    return phones;
  },
};
