import {PatientdataModel} from "../model/patientdata.model";
import {MedData} from "../model/medData.model";

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

    public static async createPatientData(body: any) {
        return PatientdataModel.create({
            id: 0,
            medDataId: body.medDataId,
            prename: body.prename,
            aftername: body.aftername,
            sex: body.sex,
            address: body.address,
            zip: body.zip,
            city: body.city,
        }).then(() => {
            return Promise.resolve('Entry successfully created')
        }).catch(() => {
            return Promise.reject('Could not create entry')
        });
    }
}