const { faker } = require("@faker-js/faker");

const units = ['PCS', 'KG', 'LTR'];

module.exports = {
  async up(queryInterface, Sequelize) {
    const priceLists = Array.from({ length: 100 }).map(() => ({
      id: faker.string.uuid(),
      articleNo: faker.number.int({ min: 1000, max: 9999 }),
      product: faker.number.int({ min: 1, max: 100 }),
      price: faker.number.float({ min: 10, max: 500, precision: 0.01 }),
      unit: faker.helpers.arrayElement(units),
      description: faker.commerce.productDescription(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert('PriceLists', priceLists, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PriceLists', null, {});
  }
};
