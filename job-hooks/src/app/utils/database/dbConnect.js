import mysql2 from "mysql2";
import { Sequelize } from "sequelize";

const sqlPool = new Sequelize("jobhooks", "root", "THANUSmysql@2005", {
  host: "localhost",
  dialect: "mysql",
  dialectModule: mysql2,
  pool: {
    max: 5,
    min: 0,
  },
});

export default sqlPool;
