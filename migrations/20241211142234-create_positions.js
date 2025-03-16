'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Positions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      positionTitle: {
        type: Sequelize.STRING
      },
      positionDetails: {
        type: Sequelize.TEXT
      },
      compensation: {
        type: Sequelize.DECIMAL(10, 2)
      },
      workLocation: {
        type: Sequelize.STRING
      },
      employmentType: {
        type: Sequelize.ENUM('Full-time', 'Part-time')
      },
      postedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      closesAt: {
        type: Sequelize.DATE
      },
      organizationId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Organizations',
          key: 'id'
        },
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('Positions'); // Updated to match the new table name
  },
};