import { Router } from "express";
import { admin,create, index, store ,show,addepartment,alldeps,createdepartment} from "../controllers/subjects.js";

const route = new Router();
route.get('/',admin )
route.get('/subjects', index);
route.get('/subjects/create', create);
route.post('/subjects', store);
route.get('/subjects/:_id', show)
route.get('/departments',alldeps)
route.get('/adddep', addepartment)
route.post('/departments',createdepartment)
export default route;


