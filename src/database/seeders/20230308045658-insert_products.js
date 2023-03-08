'use strict';

const productsArray = require("../old/productsTableInfos");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('products', productsArray , {});

  },

  async down (queryInterface, Sequelize) {
 
    await queryInterface.bulkDelete('products', null, {});

  }
};
