import { Request, Response } from 'express';
import { updateService} from '../models/service';

const handler= (req: Request, res: Response)=>{
    const {title, description, picture, code, credit, campus, department,_id}=req.body;
    try{
        updateService(_id, title, description, picture, code, credit, campus, department);
    } catch (err){
        console.error(err);
        res.status(500).end();
    }
    res.status(200).end();
};
    export default handler;
