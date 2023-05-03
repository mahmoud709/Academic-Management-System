import express from "express";
import { engine } from 'express-handlebars';
import { env } from 'process';
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.send("<h2>Hello from NodeJS</h2>")
})
app.listen(process.env.port|3000, () => {
    console.log(`App is started on port ${process.env.port}`)
})