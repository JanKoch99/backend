import {Person} from "../model/person.model";
import {Role} from "../model/role.model";

export class PersonService {
    public static async getPerson(body: { mail: string}) {
        return Person.findByPk(body.mail)
            .then((person: any) => {
                if (person) {
                    return Promise.resolve(person);
                } else {
                    return Promise.reject("Person not found");
                }
            })
            .catch(() => {
                return Promise.reject('Could not fetch person data')
            });
    }

    public static async createPerson(body: any) {
        return Person.create({
            userName: body.userName,
            password: body.password,
            roleId: body.roleId,
        }).catch(() => {
            return Promise.reject('failed to create Person');
        })

    }
}