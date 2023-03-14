'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.addColumn('addresses', "zip_code" ,{ 
      type: Sequelize.STRING(10),
      after: "reference"
   });

  },

  async down (queryInterface, Sequelize) {
 
    await queryInterface.removeColumn('addresses', "zip_code");


  }
};

