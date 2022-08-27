/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import { PatientDataAttributes} from "../model/patientdata";



// getting a single post
const getPatientData = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from the req
    let id: string = req.params.id;
    // get the post
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let post: PatientDataAttributes = result.data;
    return res.status(200).json({
        message: post
    });
};


export default { getPatientData };