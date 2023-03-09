'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('orders', 'status');
  },
  down: async (queryInterface, Sequelize) => {
    
  }
};


