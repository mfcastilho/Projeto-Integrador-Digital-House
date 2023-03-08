'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

  await queryInterface.createTable('products_variant', { 
    id:{
      type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false
    },
    model:{
      type: Sequelize.STRING,
      allowNull: false
    },
    color:{
      type: Sequelize.STRING,
      allowNull: false
    },
    quantity:{
      type: Sequelize.INTEGER,
      allowNull: false
    },
    image:{
      type: Sequelize.STRING,
      allowNull: false
    },
    size:{
      type: Sequelize.STRING,
      allowNull: false
    },
    product_id:{
      type: Sequelize.STRING,
      allowNull:false,
      references:{
        model: "products",
        key: "id"
      }
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

  await queryInterface.dropTable('products_variant');

  }
};
