import { DataTypes } from "sequelize";
import sqlPool from "../dbConnect.js";

const Company = sqlPool.define("Company", {
  companyID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Company name cannot be empty",
      },
      len: {
        args: [2, 100],
        msg: "Company name must be between 2 and 100 characters",
      },
    },
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Location cannot be empty",
      },
    },
  },
  isHiring: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
    validate: {
      isIn: {
        args: [[true, false]],
        msg: "isHiring must be either true or false",
      },
    },
  },
});

export default Company;
