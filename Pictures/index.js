import express from 'express';
import mongoose from 'mongoose';
import { engine } from 'express-handlebars';
<<<<<<< HEAD
import dotenv from 'dotenv';
dotenv.config();

import route from './routes/subjects.js';
import studentsAcc from './routes/studentsAcc.js';
import doctorsAcc from './routes/doctorsAcc.js';

mongoose.connect(process.env.mongoConnection)
const app = express();
app.use(express.urlencoded({ extended: true }));


=======
import * as dotenv from 'dotenv';
import route from './routes/subjects.js';
import methodOverride from 'method-override'
mongoose.connect('mongodb://127.0.0.1:27017/department')
dotenv.config()
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
>>>>>>> 16dab0b (Add Edit Subject and Delete it)
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/admin', route);
app.use('/studentAcc' , studentsAcc);
app.use('/doctorAcc' , doctorsAcc);

app.listen(process.env.port, () => {
    console.log(`app is running in http://localhost:${process.env.port}`)
});