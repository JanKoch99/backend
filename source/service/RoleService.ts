import {Role} from "../model/role.model";
import {Person} from "../model/person.model";

export class RoleService {
    public static async getRole(roleId: number) {
        return Role.findByPk(roleId)
            .then((role: any) => {
                if (role) {
                    return Promise.resolve(role);
                } else {
                    return Promise.reject("Person not found");
                }
            })
            .catch(() => {
                return Promise.reject('Could not fetch person data')
            });
    }
    public static async setRole(body: any) {
        return Role.create({
            auth: body.role
        }).catch((err: any) => {
            return Promise.reject(err);
        })
    };

}