'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Organizations', {
      id: {
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Accounts',
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      organizationName: {
        type: Sequelize.STRING
      },
      headquarters: {
        type: Sequelize.STRING
      },
      contactDetails: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Organizations'); // Updated from 'Companies'
  }
};


