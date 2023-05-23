import { Schema, model } from "mongoose";

const subject = new Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: false,
    },
    previousSubjects: {
        type: String,
        required:true
    },
    department:{
        type : Schema.Types.ObjectId ,
        required:false,
        ref :'department'
    }
}, { timestamps: true });

const subjectmodel = model('subject', subject);
export default subjectmodel;