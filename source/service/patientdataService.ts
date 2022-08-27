import {PatientdataModel} from "../model/patientdata.model";

export class PatientdataService {
    public static async getPatientData(patientId: number) {
        return PatientdataModel.findByPk(patientId)
            .then((patient: any) => {
                if (patient) {
                    return Promise.resolve(patient);
                } else {
                    return Promise.reject("Patient not found");
                }
            })
            .catch(() => {
                return Promise.reject('Could not fetch patient data')
            });
    }

}