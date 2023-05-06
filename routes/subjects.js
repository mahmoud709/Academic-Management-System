import { Router } from "express";
import { create, index, store ,show} from "../controllers/subjects.js";

const route = new Router();

route.get('/', index);
route.get('/create', create);
route.post('/', store);
route.get('/:_id',show)
export default route;


