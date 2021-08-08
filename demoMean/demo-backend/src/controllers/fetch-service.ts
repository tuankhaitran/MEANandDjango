import { Request, Response } from 'express';
import {fetchService} from '../models/service';

const handler = async (req: Request, res: Response)=>{
    try{
        const service = await fetchService(req.params.id);
        res.json(service);
    } catch(err){
        console.error(err);
        res.status(500).end();
    }
};
export default handler;