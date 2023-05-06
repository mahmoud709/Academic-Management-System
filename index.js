import express from 'express';
import mongoose from 'mongoose';
import { engine } from 'express-handlebars';
import * as dotenv from 'dotenv';
import route from './routes/subjects.js';
import studentsAcc from './routes/studentsAcc.js';
import doctorsAcc from './routes/doctorsAcc.js';

mongoose.connect('mongodb://127.0.0.1:27017/department')
dotenv.config()
const app = express();
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// use the route middleware with the /admin prefix
app.use('/admin', route);

app.use('/studentAcc' , studentsAcc);
app.use('/doctorAcc' , doctorsAcc);

app.listen(3000, () => {
    console.log('app is running')
});