'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('orders_details', { 
      id:{
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      product_variant_id:{
        type: Sequelize.STRING,
        allowNull: false,
        references:{
          model:"Products_variant",
          key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      order_id:{
        type: Sequelize.STRING,
        allowNull: false,
        references:{
          model: "Orders",
          key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      quantity:{
        type: Sequelize.INTEGER,
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

    await queryInterface.dropTable('orders_details');

  }
};
