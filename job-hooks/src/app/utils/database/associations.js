import User from "./models/User.js";
import Company from "./models/Company.js";
import Job from "./models/Job.js";
import Application from "./models/Application.js";
import JobStatus from "./models/JobStatus.js";

// Relations in Job model
Company.hasMany(Job, { foreignKey: "companyID" });
Job.belongsTo(Company, { foreignKey: "companyID" });

// Relations in Application model
User.hasMany(Application, { foreignKey: "userEmail" });
Application.belongsTo(User, { foreignKey: "userEmail" });
Job.hasMany(Application, { foreignKey: "jobID" });
Application.belongsTo(Job, { foreignKey: "jobID" });

// Relations in JobStatus model
User.hasMany(JobStatus, { foreignKey: "userEmail" });
JobStatus.belongsTo(User, { foreignKey: "userEmail" });
Job.hasMany(JobStatus, { foreignKey: "jobID" });
JobStatus.belongsTo(Job, { foreignKey: "jobID" });
Company.hasMany(JobStatus, { foreignKey: "companyID" });
JobStatus.belongsTo(Company, { foreignKey: "companyID" });

export { User, Job, Company, JobStatus, Application };