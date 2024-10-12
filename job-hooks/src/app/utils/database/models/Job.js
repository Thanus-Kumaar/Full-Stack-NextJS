import { DataTypes } from "sequelize";
import sqlPool from "../dbConnect";

const Job = sqlPool.define("Job", {
  jobID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  companyID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Company',
      key: 'companyID', 
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Job title cannot be empty",
      },
      len: {
        args: [2, 100],
        msg: "Job title must be between 2 and 100 characters",
      },
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Job description cannot be empty",
      },
      len: {
        args: [10, 5000],
        msg: "Job description must be between 10 and 5000 characters",
      },
    },
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        msg: "Salary must be a valid integer",
      },
      min: {
        args: [0],
        msg: "Salary cannot be negative",
      },
    },
  },
  jobType: {
    type: DataTypes.ENUM("Full Time", "Part Time", "Internship"),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "The Job type field cannot be empty!",
      },
      isIn: {
        args: [["Full Time", "Part Time", "Internship"]],
        msg: "The value should be Full Time or Part Time or Internship",
      },
    },
  },
});

export default Job;
