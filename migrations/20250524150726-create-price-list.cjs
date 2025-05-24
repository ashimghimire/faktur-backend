'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('PriceLists', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
      },
      articleNo: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      product: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      unit: {
        type: Sequelize.ENUM('PCS', 'KG', 'LTR'),
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('PriceLists');
  }
};
