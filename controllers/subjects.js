import departmentmodel from '../database/department.js';
import subjectmodel from '../database/sub.js';
export const admin=(req, res) => {
    res.render('layouts/admin')
}
export const index = async (req, res) => {
    let subjects = await subjectmodel.find({}, { name: 1 }).sort({ createdAt: 1 }).lean();
    res.render('subjects/index', { subjects })
}
export const create = async (req, res) => {
    const departments = await departmentmodel.find().lean();
    res.render('subjects/create', { departments })
}

export const store = async (req, res) => {
    const { SubjectName, SubjectCode, Department } = req.body;
    await subjectmodel.create({
        name:SubjectName,
        code:SubjectCode,
        department:Department,
    });
    res.redirect('/admin/subjects');
};

export const show = async (req, res) => {
    const { _id } = req.params;
    const singlesubject = await subjectmodel.findById(_id).populate('department').lean();
    res.render('subjects/show', { singlesubject })
}