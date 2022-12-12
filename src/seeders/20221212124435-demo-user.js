"use strict";

const tableName = "users";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(tableName, [
      {
        id: 1,
        name: "테스트",
        nickname: "테스트",
        email: "test@test.com",
        phone: "01012341234",
        password: "1234",
        email2: "1",
      },
      {
        id: 2,
        name: "테스트2",
        nickname: "테스트2",
        email: "test2@test.com",
        phone: "01012341235",
        password: "1234",
        email2: "2",
      },
      {
        id: 3,
        name: "테스트3",
        nickname: "테스트3",
        email: "test3@test.com",
        phone: "01012341236",
        password: "1234",
        email2: "3",
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
