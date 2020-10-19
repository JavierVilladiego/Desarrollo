const { Model, DataTypes } = require('sequelize');

import { database } from '../database/db';



export class Cliente extends Model {
    public nombre!: string;
    public apellido!: string;
    public correo!: string;
    public password!: string;
    public cedula!: string;
    public fechaNacimiento!: string;
    public genero!: string;
    public direccion!: string;
    public telefono!: string;


}
export interface ClientI {
    nombre: string;
    apellido: string;
    correo: string;
    password: string;
    cedula: string;
    fechaNacimiento: string;
    genero: string;
    direccion?: string;
    telefono?: string;
}

Cliente.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false

    },

    apellido: {
        type: DataTypes.STRING,
        allowNull: false

    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false

    },
    cedula: {
        type: DataTypes.STRING,
        allowNull: false

    },
    fechaNacimiento: {
        type: DataTypes.DATE,
        allowNull: false

    },
    genero: {
        type: DataTypes.ENUM('Masculino', 'Femenino', 'Otros'),
        allowNull: false

    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false

    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false

    },
},
    {
        tableName: "Clientes",
        sequelize: database,
        timestamp: true
    }

);
