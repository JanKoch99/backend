/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import {PatientdataService} from "../service/patientdataService";


// getting a single post
const getPatientData = async (req: Request, res: Response, next: NextFunction) => {
    await PatientdataService.getPatientData(Number(req.params.id))
        .then(posts => res.json(posts))
        .catch(err => res.json(err))
};


export default { getPatientData };