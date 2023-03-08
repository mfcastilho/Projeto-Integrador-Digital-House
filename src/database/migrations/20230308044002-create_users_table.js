'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('users', { 
      id:{
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf:{
        type: Sequelize.STRING,
        allowNull: false
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false
      },
      tel:{
        type: Sequelize.STRING,
        allowNull: false
      },
      is_admin:{
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      address_id:{
        type: Sequelize.STRING,
        allowNull: false,
        references:{
          model: "addresses",
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

    await queryInterface.dropTable('users');

    }
};
