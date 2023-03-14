'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.addColumn('addresses', "reference" ,{ 
      type: Sequelize.STRING(255),
      after: "number"
   });

   await queryInterface.addColumn('addresses', "complement" ,{ 
    type: Sequelize.STRING(90),
    after: "number"
 });


  },

  async down (queryInterface, Sequelize) {
 
    await queryInterface.removeColumn('addresses', "complement");
    await queryInterface.removeColumn('addresses', "reference");

  }
};
