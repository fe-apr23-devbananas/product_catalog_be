'use strict';

/** @type {import('sequelize-cli').Migration} */

const products = require('./20230802205101-add-products.json');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', products);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', {
      name: products.map(({ name }) => name),
    });
  },
};
