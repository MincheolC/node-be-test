const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "../../.env") });

const sequelizeMysqlConfig = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  dialect: "mysql",
  port: 3306,
  dialectOptions: {
    bigNumberStrings: true,
  },
};

module.exports = {
  // 서버 설정
  env: process.env.NODE_ENV,
  port: process.env.PORT,

  // Mysql (Sequelize) 설정
  development: sequelizeMysqlConfig,
  test: sequelizeMysqlConfig,
  production: sequelizeMysqlConfig,
};
