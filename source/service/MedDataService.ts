import {MedData} from "../model/medData.model";
import {isNewerDate} from "../shinanigans";

export class MedDataService {
    public static async getMedData(medDataId: number) {
        return MedData.findByPk(medDataId)
            .then((found: any) => {
                if (found) {
                    return Promise.resolve(found);
                } else {
                    return Promise.reject("MedData not found");
                }
            })
            .catch(() => {
                return Promise.reject('Could not fetch medData')
            });
    }

    public static async updateMedData(medDataId: number){
        return MedData.findByPk(medDataId).then((found: null) => {
            if (found != null){
                return this.updateAmount(found)
                    .then(update => {
                        return Promise.resolve(update);
                    })
                    .catch(err => {
                        return Promise.reject(err);
                    });
            }
        });
    }

    private static async updateAmount(receipt: any) {
        if (isNewerDate(receipt.validUntil, new Date())) {
            return Promise.reject('Medicalprescription is not valid.');
        } else if (receipt.amountLeft < 1) {
            return Promise.reject('Already been redeemed ' + receipt.amountLeft + '/' + receipt.originalAmount + ' times.');
        } else {
            let newAmount = receipt.amountLeft - 1;
            return receipt.update({amountLeft: newAmount})
                .then(() => {
                    if (newAmount === 0) {
                        return Promise.resolve('The medicalprescription has been used up.');
                    } else {
                        return Promise.resolve('This prescription has been used ' + newAmount + '/' + receipt.originalAmount + ' times.');
                    }
                })
                .catch(() => {
                    return Promise.reject('Failed to update amount.')
                })
        }
    }

    public static async createMedData(body: any) {
        return MedData.create({
            id: 0,
            doctorId: body.doctorId,
            dateOfIssue: body.dateOfIssue,
            drug: body.drug,
            validUntil: body.validUntil,
            useCase: body.useCase,
            originalAmount: body.originalAmount,
            amountLeft: body.originalAmount,
            patientDataId: body.personId
        }).then(() => {
            return Promise.resolve('Entry successfully created')
        }).catch(() => {
            return Promise.reject('Could not create entry')
        });
    }

}