import adminAcc from "../database/adminAcc.js";


export const index = async (req , res) =>{
    const subviwe = await adminAcc.find().lean();
    res.render('adminsAcc/index', {subviwe});
};


export const create = async (req , res) =>{
  
    res.render('adminsAcc/create');
};


export const store= async (req , res) =>{

 const {username , password } = req.body;
    await adminAcc.create({
        username , 
        password ,
       
    });
    res.redirect('/adminAcc');
};



export const show = async (req , res) =>{

const {id} = req.params;

const singleAcc= await studentAcc.findById(id).lean();

res.render('studentsAcc/show', {studentAcc:singleAcc})
   
};

