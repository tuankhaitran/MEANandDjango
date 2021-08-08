import {Request, Response} from 'express';
import { deleteService} from '../models/service';

const handler =(req: Request, res: Response)=>{
    const{ id } = req.params;
    try{
        deleteService(id);
    } catch(err){
        console.error(err);
        res.status(500).end();
    }
    res.status(200).end();
};
export default handler;