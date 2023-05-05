import { Router } from "express";
import { create, index, store } from "../controllers/subjects.js";

const route = new Router();

route.get('/', index);
route.get('/create', create);
route.post('/', store);

export default route;


