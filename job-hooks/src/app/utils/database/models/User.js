import { DataTypes } from "sequelize";
import sqlPool from "../dbConnect";

const User = sqlPool.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: {
        msg: "Name should only contain letters"
      },
      len: {
        args: [2, 50],
        msg: "Name must be between 2 and 50 characters"
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    unique: {
      msg: "Email address must be unique"
    },
    validate: {
      isEmail: {
        msg: "Please provide a valid email address"
      }
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: {
        args: /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        msg: "Password must be at least 8 characters long and contain at least one lowercase letter, one number, and one special character"
      }
    }
  },
  location: {
    type: DataTypes.STRING,
  },
  phone_number: {
    type: DataTypes.STRING,
    validate: {
      is: {
        args: /^[0-9]{10,15}$/,
        msg: "Phone number must be between 10 and 15 digits"
      }
    }
  }
});

export default User;
