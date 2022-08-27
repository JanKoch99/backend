import {DataTypes, Model, Sequelize} from 'sequelize';

export interface PatientDataAttributes {
    medDataId: Number;
    id: Number;
    prename: String;
    aftername: String;
    sex: String;
    address: String;
    zip: Number;
    city: String;
}

export class PatientData extends Model<PatientDataAttributes> implements PatientDataAttributes{
    address: String;
    aftername: String;
    city: String;
    id: Number;
    medDataId: Number;
    prename: String;
    sex: String;
    zip: Number;


    public static initialize(sequelize: Sequelize) {
        PatientData.init({
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