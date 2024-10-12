import { DataTypes } from "sequelize";
import sqlPool from "../dbConnect.js";

const JobStatus = sqlPool.define("JobStatus", {
  statusID: {
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
  companyID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Companies",
      key: "companyID",
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  hiredOn: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDate: {
        msg: "Hired date must be a valid date",
      },
    },
  },
});

export default JobStatus;
