'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('orders', [{
      id: "dhsghghdgudkhglsudgh6575756985yhf",
      user_id: "9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('orders', null, {});

  }
};
