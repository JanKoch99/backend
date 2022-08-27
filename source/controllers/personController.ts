/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import {PersonService} from "../service/PersonService";

const getPerson = async (req: Request, res: Response, next: NextFunction) => {
    await PersonService.getPerson(Number(req.params.id))
        .then(posts => res.json(posts))
        .catch(err => res.json(err))
};


export default { getPerson };