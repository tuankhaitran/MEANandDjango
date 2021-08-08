import {Request, Response } from 'express';
import {fetchServices } from '../models/service';

const handler = async (req: Request, res: Response)=> {
    try{
        const services = await fetchServices();
        res.json(services);
    } catch(err){
        console.log(err);
        res.status(500).end();
    }
};
export default handler;