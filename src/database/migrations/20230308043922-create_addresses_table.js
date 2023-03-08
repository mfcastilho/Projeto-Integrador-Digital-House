'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('addresses', { 
      id:{
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull:false
      },
      public_place:{
        type: Sequelize.STRING,
        allowNull: false
      },
      numbrer:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      district:{
        type: Sequelize.STRING,
        allowNull:false
      },
      city:{
        type: Sequelize.STRING,
        allowNull: false
      },
      state:{
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false 
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('addresses');

  }
};
