import express from "express";
import { engine } from 'express-handlebars';

import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/',(req, res) => {
    res.send("<h2>Hello from NodeJS</h2>")
})

app.listen(port, () => {
    console.log(`App is running on port: ${port}`)
});