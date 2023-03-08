'use strict';

const categoriesArray = require("../old/categoriesTableInfos");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('categories', categoriesArray, {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('categories', null, {});

  }
};
