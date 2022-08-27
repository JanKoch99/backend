import {Role} from "../model/role.model";

export class RoleService {
    public static async getRole(roleId: number) {
        return Role.findByPk(roleId)
            .then(role => {
                if (role) {
                    return Promise.resolve(role);
                } else {
                    return Promise.reject("Person not found");
                }
            })
            .catch(e => {
                return Promise.reject('Could not fetch person data')
            });
    }

}