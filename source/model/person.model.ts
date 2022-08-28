import {DataTypes, Model} from 'sequelize';
import db from "../config/database.config";

interface PersonAttributes {
    id: number;
    userName: string;
    password: string;
    patientDataId: number | undefined;
    roleId: number;
}


export class Person extends Model<PersonAttributes> {}

Person.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        patientDataId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        roleId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize:db,
        tableName: 'person'
    }
)


