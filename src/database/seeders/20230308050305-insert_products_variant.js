'use strict';

const productsVariantArray = require("../old/productsVariantInfos");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('products_variant', productsVariantArray, {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('products_variant', null, {});

  }
};
