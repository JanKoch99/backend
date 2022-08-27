/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import {MedDataService} from "../service/MedDataService";

/*
// getting all posts
const getPosts = async (req: Request, res: Response, next: NextFunction) => {
    // get some posts
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    let posts: [Post] = result.data;
    return res.status(200).json({
        message: posts
    });
};
 */

// getting a single receipt
const getMedData = async (req: Request, res: Response, next: NextFunction) => {
   await MedDataService.getMedData(Number(req.params.id))
       .then(post => res.json(post))
       .catch(err => res.json(err))
};

// updating a validity of a receipt
const updateMedData = async (req: Request, res: Response, next: NextFunction) => {
    await MedDataService.updateMedData(Number(req.params.id))
        .then(post => res.json(post))
        .catch(err => res.json(err))
};



// adding a receipt
const createMedData = async (req: Request, res: Response, next: NextFunction) => {
    await MedDataService.createMedData(req.body)
        .then(post => res.json(post))
        .catch(err => res.json(err))};

export default { getMedData, updateMedData, createMedData};