import {DataTypes, Model, Sequelize} from 'sequelize';

export interface RoleAttributes {
    id: number;
    auth: string;
}

export class Role extends Model<RoleAttributes> implements RoleAttributes{
    id: number;
    auth: string;


    public static initialize(sequelize: Sequelize) {
        Role.init({
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                auth: {
                    type: DataTypes.STRING,
                    allowNull: false
                }
            },
            {
                sequelize,
                tableName: 'role'
            });
    }
}