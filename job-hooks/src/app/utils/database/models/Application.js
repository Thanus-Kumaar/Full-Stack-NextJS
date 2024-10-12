import { DataTypes } from "sequelize";
import sqlPool from "../dbConnect.js";

const Application = sqlPool.define("Application", {
  applicationID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userEmail: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "Users",
      key: "email",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    validate: {
      isEmail: {
        msg: "Please provide a valid email address",
      },
    },
  },
  jobID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Jobs",
      key: "jobID",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  status: {
    type: DataTypes.ENUM("Pending", "Accepted", "Rejected"),
    defaultValue: "Pending",
    allowNull: false,
    validate: {
      isIn: {
        args: [["Pending", "Accepted", "Rejected"]],
        msg: "Status must be one of 'Pending', 'Accepted', or 'Rejected'",
      },
    },
  },
  appliedDate: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDate: {
        msg: "Applied date must be a valid date",
      },
    },
  },
});

export default Application;
