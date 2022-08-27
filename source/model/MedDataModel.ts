import {DataTypes, Model, Sequelize} from 'sequelize';

export interface MedDataAttributes {
    id: Number;
    dateOfIssue: String;
    drug: String;
    validUntil: String;
    useCase: String;
    doctorId: Number;
    originalAmount: Number;
    amountLeft: Number;
    personId: Number;
}

export class MedData extends Model<MedDataAttributes> implements MedDataAttributes{
    id: Number;
    doctorId: Number;
    dateOfIssue: String;
    drug: String;
    validUntil: String;
    useCase: String;
    originalAmount: Number;
    amountLeft: Number;
    personId: Number;


    public static initialize(sequelize: Sequelize) {
        MedData.init({
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
                personId: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                }

            },
            {
                sequelize,
                tableName: 'med_data'
            });
    }
}