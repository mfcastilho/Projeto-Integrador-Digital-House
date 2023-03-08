'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'password', {
      type: Sequelize.STRING,
      allowNull: null
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users', 'pssword', {
      type: Sequelize.STRING,
      allowNull: null
    });
  }
};
