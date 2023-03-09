'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('categories', 'updated_at', 'updatedAt');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('categories', 'updated_at', 'updatedAt');
  }
};

