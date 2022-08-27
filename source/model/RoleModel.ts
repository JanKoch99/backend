import {DataTypes, Model, Sequelize} from 'sequelize';

export interface RoleAttributes {
    id: Number;
    auth: Number;
}

export class Role extends Model<RoleAttributes> implements RoleAttributes{
    id: Number;
    auth: Number;


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