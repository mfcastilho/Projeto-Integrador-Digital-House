'use strict';

const addressesArray = require("../old/adressesTableInfos");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('addresses', addressesArray, {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('addresses', null, {});

  }
};
