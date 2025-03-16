const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Application = sequelize.define(
  "Application",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    appliedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    applicationStatus: {
      type: DataTypes.ENUM("Pending", "Accepted", "Rejected"),
      defaultValue: "Pending",
    },
    accountId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Account",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    positionId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Position",
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Application;
