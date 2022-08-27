import {Person} from "../model/person.model";

export class PersonService {
    public static async getPerson(personId: number) {
        return Person.findByPk(personId)
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

}