'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('products', { 
      id:{
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    tshirt_print:{
        type: Sequelize.STRING,
        allowNull: false
    },
    price:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    active:{
        type: Sequelize.BOOLEAN
    },
    category_id:{
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: "categories",
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
 
    await queryInterface.dropTable('products');

  }
};
