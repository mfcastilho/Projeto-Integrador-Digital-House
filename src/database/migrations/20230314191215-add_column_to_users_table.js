'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.addColumn('users', "gender" ,{ 
      type: Sequelize.STRING(10),
      after: "cpf"
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', "gender");
  }
};
