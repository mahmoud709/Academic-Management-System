import { Schema, model } from "mongoose";

const subject = new Schema({
    name: {
        type: String,
        required: false,
    },
    code: {
        type: String,
        required: false,
    },
    department:{
        type : Schema.Types.ObjectId ,
        required:false,
        ref :'department'
    },
}, { timestamps: true });

const subjectmodel = model('subject', subject);
export default subjectmodel;