'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('categories', { 
       id:{
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
       },
       category_name:{
        type: Sequelize.STRING,
        allowNull: false
       },
       created_at: {
        type: Sequelize.DATE,
        allowNull: false 
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }

    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('categories');

  }
};
