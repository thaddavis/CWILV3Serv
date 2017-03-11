var { ClassGrade } = require('../models/ClassGrade');
var mongoose = require('mongoose')
var ObjectID = mongoose.Types.ObjectId;

//app.post('/tests', authenticate, (req,res) => {
exports.newClassGrade = (req,res,next) => {
	console.log("new ClassGrade");
	var classGrade = new ClassGrade({
		classID: req.body.classID,
		studentID: req.body.studentID,
		taskID: req.body.taskID,
		grade: req.body.grade
	});
	classGrade.save().then((doc) => {
		res.send(doc);
	}, (err) => {
		res.status(400).send(err);
	});
};

//app.get('/tests', authenticate, (req,res) => {
exports.getClassGradesForStudent = function(req,res,next) {

	console.log(req.body);
	ClassGrade.find({
		classID: req.body.classID
	}).then((classGrades) => {
    	console.log(classGrades);
    	res.send({
      		classGrades
		});
	}, (err) => {
		res.status(400).send(err);
	});
};