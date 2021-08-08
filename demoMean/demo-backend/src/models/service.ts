import mongoose from 'mongoose';

type ServiceModel = mongoose.Document & {
    title: string;
    description: string;
    picture: string;
    code:string;
    credit:number;
    campus:string;
    department: string;
};

const schema = new mongoose.Schema({
    title: { type: String, required: true},
    
    description: { type: String, required: true},
    
    picture: { type: String, required: true},

    code:{ type: String, required: true},

    credit:{ type: Number, required: true, min: 0},

    campus:{ type: String, required: true},

    department:{type: String, required: true}
    
});

const Service = mongoose.model<ServiceModel>('Service', schema);

export const addService = (title:string, description: string, picture: string, code: string, credit: number,campus:string, department:string) => {
     new Service({ title, description, picture,code,credit,campus,department}).save();
};

export const fetchServices = async ()=> await Service.find({});

export const fetchService =async (id: string) => await Service.find({_id: id});

export const updateService = async(
    id: string, title: string, description: string, picture: string, code: string, credit: number, campus:string, department: string,
) => await Service.findByIdAndUpdate(id, { title,description,picture,code,credit, campus,department });

export const deleteService = async(id: string)=> await Service.deleteOne({ _id:id });