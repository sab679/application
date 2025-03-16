const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Position = sequelize.define(
  "Position",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    positionTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    positionDetails: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    compensation: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    workLocation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employmentType: {
      type: DataTypes.ENUM("Full-time", "Part-time"),
      allowNull: false,
    },
    postedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    closesAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    organizationId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Organization",
        key: "id",
      },
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Position;
