import {DataTypes, Model, Sequelize} from 'sequelize';

export interface PatientDataAttributes {
    medDataId: number;
    id: number;
    prename: string;
    aftername: string;
    sex: string;
    address: string;
    zip: number;
    city: string;
}

export class PatientdataModel extends Model<PatientDataAttributes> implements PatientDataAttributes{
    address: string;
    aftername: string;
    city: string;
    id: number;
    medDataId: number;
    prename: string;
    sex: string;
    zip: number;


    public static initialize(sequelize: Sequelize) {
        PatientdataModel.init({
            address: {
                type: DataTypes.STRING,
                allowNull: false
            },
            aftername: {
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
                sequelize,
                tableName: 'patient_data'
            });
    }
}