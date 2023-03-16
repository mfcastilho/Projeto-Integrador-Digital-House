'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('orders_details', 'createdAt', 'created_at');
    await queryInterface.renameColumn('orders_details', 'updatedAt', 'updated_at');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('orders_details', 'createdAt', 'created_at');
    await queryInterface.renameColumn('orders_details', 'updatedAt', 'updated_at');
  }
};
