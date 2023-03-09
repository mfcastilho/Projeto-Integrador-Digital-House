'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('products', 'category_id', 'categoryId');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('products', 'category_id', 'categoryId');
  }
};
