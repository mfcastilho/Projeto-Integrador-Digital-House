'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('orders', { 
      id:{
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      status:{
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      user_id:{
        type: Sequelize.STRING,
        allowNull: false,
        references:{
          model:"users",
          key: "id"
        }
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

    await queryInterface.dropTable('orders');

  }
};
