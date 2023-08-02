import { Sequelize } from 'sequelize-typescript';

export const initDB = () => {
  const DB_PASSWORD = process.env.DB_PASSWORD;
  const DB_USER = process.env.DB_USER;
  const DB_NAME = process.env.DB_NAME;
  const DB_HOST = process.env.DB_HOST;
  const DB_PORT = process.env.DB_PORT;

  const DB_URI = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

  return new Sequelize(DB_URI, {
    dialectOptions: {
      ssl: true,
    },
  });
};
