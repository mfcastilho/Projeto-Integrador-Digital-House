'use strict';

const orderDetailsArray = require("../old/ordersDetailTableInfos");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('orders_details', orderDetailsArray, {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('orders_details', null, {});

  }
};
