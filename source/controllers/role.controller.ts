/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import {RoleService} from "../service/RoleService";

const getRole = async (req: Request, res: Response, next: NextFunction) => {
    await RoleService.getRole(Number(req.params.id))
        .then(posts => res.json(posts))
        .catch(err => res.json(err))
};

const setRole = async (req: Request, res: Response, next: NextFunction) => {
    await RoleService.setRole(req.body)
        .then(posts => res.json(posts))
        .catch(err => res.json(err))
};


export default { getRole, setRole };