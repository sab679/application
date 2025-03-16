const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Organization = sequelize.define(
  "Organization",
  {
    id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Account",
        key: "id",
      },
      primaryKey: true,
    },
    organizationName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    headquarters: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactDetails: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Organization;
