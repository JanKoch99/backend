import {DataTypes, Model, Sequelize} from 'sequelize';

export interface PersonAttributes {
    id: Number;
    user: String;
    password: String;
    patientDataId: Number;
    roleId: Number;
}

export class Person extends Model<PersonAttributes> implements PersonAttributes{
    id: Number;
    user: String;
    password: String;
    patientDataId: Number;
    roleId: Number;


    public static initialize(sequelize: Sequelize) {
        Person.init({
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                user: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                patientDataId: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                roleId: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                }
            },
            {
                sequelize,
                tableName: 'person'
            });
    }
}