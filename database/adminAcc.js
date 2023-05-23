import { Schema , model } from "mongoose";

const admins = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
}, {timeseries:true});

export default model('admin' , admins);