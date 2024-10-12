import sqlPool from "./dbConnect.js";
import { User, Company, Job, Application, JobStatus } from "./associations.js";

const syncDB = async function () {
  try {
    await sqlPool.authenticate();
    console.log("Database connection has been established successfully.");

    await sqlPool.sync({ force: true });
    console.log("All models were synchronized successfully.");
  } catch (err) {
    console.log(err);
  }
};

syncDB();
