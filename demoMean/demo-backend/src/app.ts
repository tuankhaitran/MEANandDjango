import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import addServiceController from './controllers/add-service';
import fetchServices from './controllers/fetch-services';

import fetchService from './controllers/fetch-service';
import updateServiceController from './controllers/update-service';
import deleteServiceController from './controllers/delete-service';

dotenv.config();

mongoose.connect(process.env.DB_URI as string, {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);
const db=mongoose.connection;

const app =express();
app.use(cors({origin: 'http://localhost:4200'}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//The router
app.post('/service', addServiceController)
app.get('/services',fetchServices)
app.get('/service/:id',fetchService);
app.put('/service',updateServiceController);
app.delete('/service/:id', deleteServiceController);

app.listen(process.env.port, ()=>console.log(`The server is running on http://localhost:${process.env.port}`));
