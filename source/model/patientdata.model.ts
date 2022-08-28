import {DataTypes, Model} from 'sequelize';
import db from "../config/database.config";

interface PatientDataAttributes {
    medDataId: number;
    id: number;
    prename: string;
    aftername: string;
    birthday: string;
    sex: string;
    address: string;
    zip: number;
    city: string;
}

export class PatientdataModel extends Model<PatientDataAttributes> {}

PatientdataModel.init(
    {
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        aftername: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birthday: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        medDataId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        prename: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sex: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize:db,
        tableName: 'patient_data'
    }
)
