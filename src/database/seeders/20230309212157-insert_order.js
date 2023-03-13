'use strict';

const ordersArray = require("../old/ordersTableInfos"); 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('orders', ordersArray, {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('orders', null, {});

  }
};
