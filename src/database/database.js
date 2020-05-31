import Sequelize from 'sequelize';

const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;

export const db = new Sequelize(
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',
    define: {
      timestamps: false
    }
  },
);