const Sequelize = require('sequelize');

//import {Sequelize} from 'sequelize';

const DB_NAME = 'factura_mysql_javier_villadiego';

const DB_USER = 'root';

const DB_PASS = 'root';

export const database = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);

database.sync({ force: true })
    .then(function () {
        console.log("la DB fue creada Correctamenta |||");
    }
    )
