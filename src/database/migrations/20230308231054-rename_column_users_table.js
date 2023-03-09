'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('users', 'created_at', 'createdAt');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('users', 'created_at', 'createdAt');
  }
};

