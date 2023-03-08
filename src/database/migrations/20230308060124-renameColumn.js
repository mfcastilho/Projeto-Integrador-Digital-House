'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('addresses', 'numbrer', 'number');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('addresses', 'numbrer', 'number');
  }
};

