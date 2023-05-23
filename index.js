import express from 'express';
import mongoose from 'mongoose';
import { engine } from 'express-handlebars';
import dotenv from 'dotenv';
import methodOveride from 'method-override';
dotenv.config();

import route from './routes/subjects.js';
import studentsAcc from './routes/studentsAcc.js';
import doctorsAcc from './routes/doctorsAcc.js';
import adminsAcc from './routes/adminsAcc.js';

mongoose.connect(process.env.mongoConnection)
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(methodOveride('_method'))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/admin', route);
app.use('/admin/studentAcc' , studentsAcc);
app.use('/admin/doctorAcc' , doctorsAcc);
app.use('/admin/adminAcc' , adminsAcc);

app.listen(process.env.port, () => {
    console.log(`app is running in http://localhost:${process.env.port}`)
});
