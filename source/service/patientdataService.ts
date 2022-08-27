import {PatientData} from "../model/patientdata";

export class PatientdataService {
    public static async getPatientData(patientId: number) {
        return PatientData.findByPk(patientId)
            .then(patient => {
                if (patient) {
                    return Promise.resolve(patient);
                } else {
                    return Promise.reject("Patient not found");
                }
            })
            .catch(e => {
                return Promise.reject('Could not fetch patient data')
            });
    }

}