import {DataTypes, Model, Sequelize} from 'sequelize';

export interface PersonAttributes {
    id: number;
    userName: string;
    password: string;
    patientDataId: number | undefined;
    roleId: number;
}


export class Person extends Model<PersonAttributes> implements PersonAttributes{
    id: number;
    userName: string;
    password: string;
    patientDataId: number | undefined;
    roleId: number;


    public static initialize(sequelize: Sequelize) {
        Person.init({
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                userName: {
                    type: DataTypes.STRING,
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
                sequelize,
                tableName: 'person'
            });
    }
}