/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import {PatientdataService} from "../service/patientdataService";
import {PersonService} from "../service/PersonService";
import {PatientdataModel} from "../model/patientdata.model";


// getting a single post
const getPatientData = async (req: Request, res: Response, next: NextFunction) => {
    await PatientdataService.getPatientData(Number(req.params.id))
        .then(posts => res.json(posts))
        .catch(err => res.json(err))
};

const createPatientData = async (req: Request, res: Response, next: NextFunction) => {
    await PatientdataService.createPatientData(req.body)
        .then(posts => res.json(posts))
        .catch(err => res.json(err))
};


export default { getPatientData,createPatientData};