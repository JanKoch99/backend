import {DataTypes, Model} from 'sequelize';
import db from '../config/database.config'


interface RoleAttributes {
    id: number;
    auth: string;
}


export class Role extends Model<RoleAttributes> {}

Role.init(
    {
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
        sequelize:db,
        tableName: 'role'
    });