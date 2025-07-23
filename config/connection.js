import dotenv from "dotenv";
import { Sequelize } from "sequelize";
import express from 'express';

const app = express();

dotenv.config()

const sequelize = new Sequelize( {
    dialect: 'postgres',
    user : process.env.PGUSER,
    host : process.env.PGHOST,
    database : process.env.PGDB,    
    port : process.env.PGPORT,
    password : process.env.PGPASS

});


sequelize.authenticate()
  .then(() => {
    console.log('Database connected');
    app.listen(process.env.PORT, () => {
      console.log(`Server Running Successfully on port ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


export default sequelize;