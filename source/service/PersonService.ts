import {Person} from "../model/PersonModel";

export class PersonService {
    public static async getPerson(personId: number) {
        return Person.findByPk(personId)
            .then(person => {
                if (person) {
                    return Promise.resolve(person);
                } else {
                    return Promise.reject("Person not found");
                }
            })
            .catch(e => {
                return Promise.reject('Could not fetch person data')
            });
    }

}