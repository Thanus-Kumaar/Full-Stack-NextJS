import { Sequelize } from "sequelize";

const sqlPool = new Sequelize("jobhooks", "root", "THANUSmysql@2005", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
  },
});

export default sqlPool;
