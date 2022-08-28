/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import {PersonService} from "../service/PersonService";

const getPerson = async (req: Request, res: Response, next: NextFunction) => {
    await PersonService.getPerson(req.body)
        .then(posts => res.json(posts))
        .catch(err => res.json(err))
};
const createPerson = async (req: Request, res: Response, next: NextFunction) => {
    await PersonService.createPerson(req.body)
        .then(posts => res.json(posts))
        .catch(err => res.json(err))
};


export default { getPerson, createPerson};