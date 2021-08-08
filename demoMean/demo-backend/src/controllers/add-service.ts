import { Request, Response } from 'express';
import { addService } from '../models/service';

const handler = (req:Request, res: Response)=>{
    const { title, description, picture,code,credit,campus,department}=req.body;
    try{
        addService(title, description,picture,code,credit,campus,department);
    } catch(err){
        console.log(err);
        res.status(500).end();
    }
    res.status(200).end();
};
export default handler;