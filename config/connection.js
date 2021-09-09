const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_USER,
    process.env.DB_PW,
    process.env.DB_NAME,
    {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
      port: 3001
    }
);

module.exports = sequelize;
