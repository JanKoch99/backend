import {DataTypes, Model} from 'sequelize';
import db from "../config/database.config";

interface MedDataAttributes {
    id: number;
    dateOfIssue: string;
    drug: string;
    validUntil: string;
    useCase: string;
    doctorId: number;
    originalAmount: number;
    amountLeft: number;
    patientDataId: number;
}

export class MedData extends Model<MedDataAttributes> {}

MedData.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        doctorId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dateOfIssue: {
            type: DataTypes.STRING,
            allowNull: false
        },
        drug: {
            type: DataTypes.STRING,
            allowNull: false
        },
        validUntil: {
            type: DataTypes.STRING,
            allowNull: false
        },
        useCase: {
            type: DataTypes.STRING,
            allowNull: false
        },
        originalAmount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        amountLeft: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        patientDataId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    },
    {
        sequelize:db,
        tableName: 'med_data'
    }
);