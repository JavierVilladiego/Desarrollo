const { Model, DataTypes } = require('sequelize');

import { database } from '../database/db';



export class Producto extends Model {
    public nombre!: string;
    public marca!: string;
    public precio!: string;
    public StockMin!: number;
    public Cantidad!: number;



}
export interface ProductoI {
    nombre: string;
    marca: string;
    precio: string;
    StockMin: number;
    Cantidad: number;
}

Producto.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false

    },

    marca: {
        type: DataTypes.STRING,
        allowNull: false

    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false

    },
    StockMin: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    Cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    }


},
    {
        tableName: "Productos",
        sequelize: database,
        timestamp: true
    }

);
