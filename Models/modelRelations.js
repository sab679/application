const Position = require("../Models/Position");
const Application = require("../Models/Application");
const Organization = require("../Models/Organization");
const Account = require("../Models/Account");

Position.belongsTo(Organization, { foreignKey: "organizationId", as: "organization" });
Position.hasMany(Application, { foreignKey: "positionId", as: "applications" });

Application.belongsTo(Position, { foreignKey: "positionId" });
Application.belongsTo(Organization, { foreignKey: "organizationId" });
Application.belongsTo(Account, { foreignKey: "accountId" });

Organization.hasMany(Position, { foreignKey: "organizationId" });
Organization.hasMany(Application, { foreignKey: "organizationId" });

module.exports = {
  Position,
  Application,
  Organization,
  Account,
};
